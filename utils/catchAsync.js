//this function is used to simplify try catch block
//if error exist , error would throw as parameter to next
//finally,global error handler will catch it
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
