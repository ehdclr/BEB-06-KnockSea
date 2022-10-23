/**
 1.세션으로 로그아웃 구현 
 2.클라이언트 쪽에서도 로그아웃 쿠키 값이 확인되는지 확인 
 */

module.exports = {
  post: (req, res) => {
    req.session.destroy(); //session 캐쉬 삭제.
    res.clearCookie("sid"); //쿠키 삭제

    return res.status(201).json({ success: true, message: "로그아웃 성공" });
  },
};
