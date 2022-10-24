/**
 1.현재 세션으로만 로그인 구현, 
 2.쿠키값은 클라이언트 측에서 사용할 수도 있으니 , 로그인되었는지 안되었는지
 값만 넣어줌 ( 나중에 클라이언트 측에서 확인)
 */

module.exports = {
  post: async (req, res) => {
    //지갑의 주소와, 월렛의 타입을
    //확인 해야할 것 active 값이 bool값으로 반환이 되는 것인지?
    const { account, active } = req.body;

    //만약 지갑이 존재하고, 연결이 되어 있다면,

    if (active && account) {
      //세션 만듦

      req.session.userId = account;
      req.session.save(function () {
        return res.status(201).json({ success: true, message: "로그인 성공" });
      });
    } else {
      return res.json({ success: false, message: "세션 저장 x" });
    }
  },
};
