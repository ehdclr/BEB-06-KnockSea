const session = require("express-session");

module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.userId) {
      next(); //로그인 되면 next
    } else {
      res.json({ success: false, message: "로그인 필요" });
    }
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.session.userId) {
      next();
    } else {
      res.json({ success: false, message: "이미 로그인 된 계정입니다." });
    }
  },
};
