const Nft = require("../../models/Nft");

module.exports = {
  post: async (req, res) => {
    const { account, tokenId, imageUrl, name, description } = req.body;
    try {
      //TODO(v) NFT 데이터들을 DATABASE에 저장하는 코드 작성 -- 민팅

      Nft.findOne({ account: account }, (req, wallet) => {
        //이미 토큰을 보유한 지갑 사용자면, push 하도록 하기
        if (wallet) {
          newToken = {
            tokenId: tokenId,
            imageUrl: imageUrl,
            name: name,
            description: description,
          };
          Nft.updateOne(
            { tokenId: wallet.tokenId },
            {
              $push: { tokenList: newToken },
            },
            (err, result) => {
              if (err) console.log(err);
              //TODO(): 사용자 민팅시 metaData 스키마로 저장하도록 코드 작성
              return res
                .status(200)
                .json({ success: true, message: "추가 완료." });
            }
          );

          //지갑에 토큰을 가지고 있지 않는 경우, 새로 토큰을 얻을 때,
        } else if (!wallet) {
          Nft.create({
            account: account,
            tokenList: [
              {
                tokenId: tokenId,
                imageUrl: imageUrl,
                name: name,
                description: description,
              },
            ],
          });
          //TODO() : 새로민팅시 메타데이터 스키마에 저장
          return res.status(200).json({ success: true, message: "생성 완료." });
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "server Error" });
    }
  },
};
