module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.userId) {
      next(); //로그인 되면 next
    } else {
      res.send("로그인 필요!");
    }
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.session.userId) {
      next();
    } else {
      console.log("isNotLogged!");
      res.json({ success: false, message: "not authorized" });
    }
  },
};
