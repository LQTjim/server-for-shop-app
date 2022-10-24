const express = require("express");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorContorller");

// const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const userRouter = require("./routes/userRoutes");
const testRouter = require("./routes/testRoutes");
const itemRouter = require("./routes/itemRoutes");

const app = express();
//cors
// app.use(cors({ origin: "http://localhost:3000" }));
//set security HTTP headers
app.use(helmet());
//use logger when dev working
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//body-parser
app.use(express.urlencoded({ extended: false }));
//restrict the req size
app.use(express.json({ limit: "10kb" }));
//cookie-parser
app.use(cookieParser());

// prevent NoSQL query injection.
app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);

// prevent xss(turn special character to html entity. for example : '<'	==> &lt)
app.use(xss());

// Prevent parameter pollution
//TODO param whitelist need to be added. should be String
app.use(
  hpp({
    whitelist: [],
  })
);
// limit req frequencies
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "請求已達上限",
});
app.use("/api", limiter);

app.use("/api/user", userRouter);
app.use("/api/test", testRouter);
app.use("/api/item", itemRouter);
//catch every missing routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});
//handle global error by this middleware throw by AppError
app.use(globalErrorHandler);

module.exports = app;
