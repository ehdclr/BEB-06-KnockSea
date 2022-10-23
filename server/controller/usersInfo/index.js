const User = require("../../models/User");

module.exports = {
  /**
 TODO(v) 사용자의 지갑, 보유한 NFT 리스트 
 GET 요청 localStorage에 사용자 지갑 account를 req.query문을 통해서 axios 요청 받기  
 axios 요청 http://localhost:5000/users/mypage?userId=${지갑 Account}


 */
  get: async (req, res) => {
    //TODO(v)사용자 프로필
    //TODO(v) account를 통해서 스키마에서 보유중인 토큰 목록들 가져오기

    const account = req.query;
    console.log(account.userId);
    try {
      User.findOne({ account: account.userId }, (err, userInfo) => {
        if (userInfo) {
          return res.status(201).json({
            success: true,
            userAccount: userInfo.account,
            tokenList: userInfo.tokenList,
          });
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({ succes: false });
    }
  },
};
