const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("./../model/userModel");
const AppError = require("./../utils/AppError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  //Marks the cookie to be used with HTTPS only.
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);
  console.log(token);

  // Remove password from output
  user.password = undefined;
  user.__v = undefined;

  if (process.env.NODE_ENV === "development") {
    res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  }
  if (process.env.NODE_ENV === "production") {
    res.status(statusCode).json({
      status: "success",
      data: {
        user,
      },
    });
  }
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  // // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  // res.cookie("jwt", accessToken, { maxAge: 20000, httpOnly: true });
  // // res.cookie("jwt", refreshToken, { maxAge: 40000, httpOnly: true });
  // res.json({ accessToken: accessToken });
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (!req.cookies.jwt) {
    return next(new AppError("You are not logged in.", 401));
  }
  token = req.cookies.jwt;

  //https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
  //意即當promisify接受一個function,該function最後一個回調的參數須為error
  //jwt.verify的callback即為上述情形
  //而jwt.verify在沒輸入callback時為sync function
  // const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  //包了promisify會return promise所以視為async
  //不過包和不包好像沒什麼差,當偽造jwt不過時globalerrorhandler會接住上述兩種錯誤
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );
  //check currentUser  still exists in DB
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  //Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }
  /* //decoded jwt issue at and expire time need to times 1000 cuz it is works in seconds
    //js works in miliseconds
  const iat = new Date(decoded.iat * 1000);
  const exp = new Date(decoded.exp * 1000);
  console.log(iat.toLocaleString() + "\n" + exp.toLocaleString());
  console.log(new Date().toLocaleString()); */

  //pass authorization to next middleware
  req.user = currentUser;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("You do not have permission!", 403));
    }
    next();
  };
};
