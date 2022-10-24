const User = require("../../models/User");
const NftMeta = require("../../models/NftMeta");
// const { urlToBuffer } = require("./imageBuffer");

module.exports = {
  post: async (req, res) => {
    // TODO( ) :imageURL req.files로 받아올 수 있게 프론트 formData 요청
    // TODO( ) : ipfs 라이브러리 사용해서 req.files로 넘어온 이미지 데이터 ipfs 에 업로드
    // TODO( ) : req.files로 받은 image를 ipfs.add로 ipfs에 올리기 - 이후 다시 imageUrl로 반환

    /**---------------------------------ipfs 프론트-------------------------------- */

    // 모든 것 세션 유지

    const imageUrl = req.file.location;
    const { account, tokenId, name, desc } = req.body;

    console.log(imageUrl);

    try {
      //TODO(v) NFT 데이터들을 DATABASE에 저장하는 코드 작성 -- 민팅

      User.findOne({ account: account }, (req, wallet) => {
        //이미 토큰을 보유한 지갑 사용자면, push 하도록 하기
        if (wallet) {
          newToken = {
            tokenId: tokenId,
            // imageUrl: imageUrl,
            name: name,
            description: desc,
          };
          User.updateOne(
            { tokenId: wallet.tokenId },
            {
              $push: { tokenList: newToken },
            },
            (err, result) => {
              if (err) console.log(err);
              //TODO(v): 사용자 민팅시 metaData 스키마로 저장하도록 코드 작성
            }
          );
          NftMeta.create({
            tokenId: tokenId,
            // imageUrl: imageUrl,
            name: name,
            description: desc,
          });

          //지갑에 토큰을 가지고 있지 않는 경우, 새로 토큰을 얻을 때,
        } else if (!wallet) {
          User.create({
            account: account,
            tokenList: [
              {
                tokenId: tokenId,
                // imageUrl: imageUrl,
                name: name,
                description: desc,
              },
            ],
          });
          //TODO(v) : 새로 민팅시 메타데이터 스키마에 저장
          NftMeta.create({
            tokenId: tokenId,
            // imageUrl: imageUrl,
            name: name,
            description: desc,
          });
        }
        return res.status(200).json({ success: true, message: "생성 완료." });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "server Error" });
    }
  },

  //TODO(v) : GET요청 모든 minting한 list
  //find() : 전체 데이터 불러오기
  //forEach 사용

  get: (rea, res) => {
    const test = NftMeta.find({}, (err, result) => {
      if (!result) {
        return res.status(401).json({ success: false });
      } else if (result) {
        return res.status(201).json({ success: true, tokenlist: result });
      }
    });
  },
};
