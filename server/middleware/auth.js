module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.user) {
      next(); //로그인 되면 next
    } else {
      res.status(403).send("로그인 필요!");
    }
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.session.user) {
      next(); //로그인 안되어 있으면 next
    } else {
      res.status(403).send("로그인한 상태입니다!");
    }
  },
};
