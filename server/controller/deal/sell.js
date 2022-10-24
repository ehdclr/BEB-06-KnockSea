const { token } = require("morgan");
const User = require("../../models/User");
const NftMeta = require("../../models/NftMeta");

module.exports = {
  post: async (req, res) => {
    /**
         1. 판매자는 판매리스트에 판매 중인 토큰을 넣는다. 
         1-1. 판매 성공시 판매리스트에서 pull
         2. 판매자가 취소시 판매리스트에서 pull 하여 다시 보유토큰 리스트에 push
         */
    //sellResult 는 총 세가지 - 1.success 2.cancel 3.wait(판매대기)
    //success - 거래 완료 , cancel -거래 취소 wait - 아직 구매확정 아닐 때
    const { buyerAccount, sellerAccount, tokenId, sellResult } = req.body;
    let findToken = await NftMeta.findOne({ tokenId: tokenId });

    // if (!findToken) {
    //   return res
    //     .status(401)
    //     .json({ success: false, message: "존재하지 않는 토큰입니다." });
    // }
    console.log(findToken);
    try {
      //판매대기 (무조건 선행조건 이게 이뤄져야함!)
      if (sellResult === "wait") {
        await User.updateOne(
          { account: sellerAccount },
          { $pull: { tokenList: { tokenId: tokenId } } }
        );
        //판매자의 판매리스트에 토큰 넣기
        await User.updateOne(
          { account: sellerAccount },
          {
            $push: {
              selltokenList: {
                tokenId: findToken.tokenId,
                imageUrl: findToken.imageUrl,
                name: findToken.name,
                description: findToken.description,
              },
            },
          }
        );
        // res.send("판매 대기 완료.");
        console.log("판매대기!");
      }

      /**---------------TEST------------- */

      // CASE - 판매성공
      //  trouble ))판매자의 selltokenList에서 안빠짐 ()
      else if (sellResult === "success") {
        await User.updateOne(
          { account: sellerAccount },
          { $pull: { selltokenList: { tokenId: tokenId } } }
        );

        let result = await User.findOne({ account: buyerAccount });

        //보유한 토큰이 있는 구매자라면,
        if (result) {
          tradeToken = {
            tokenId: findToken.tokenId,
            imageUrl: findToken.imageUrl,
            name: findToken.name,
            description: findToken.description,
          };
          await User.updateOne(
            { account: buyerAccount },
            {
              $push: {
                tokenList: {
                  tokenId: findToken.tokenId,
                  imageUrl: findToken.imageUrl,
                  name: findToken.name,
                  description: findToken.description,
                },
              },
            }
          );
          console.log("판매성공!");
          // return res.status(201).json({ success: true, msg: "판매 성공!" });
        }
        //보유한 토큰이 없고, 새로운 거래를 한 사람이라면, 새로 만들기
        //성공함!
        if (!result) {
          console.log("보유한 토큰 없는 구매자");
          let result3 = await User.create({
            account: buyerAccount,
            tokenList: [
              {
                tokenId: findToken.tokenId,
                imageUrl: findToken.imageUrl,
                name: findToken.name,
                description: findToken.description,
              },
            ],
          });
          console.log(result3);
          console.log("판매성공!");
          // return res.status(201).json({ success: true, msg: "판매 성공!" });
        }
      }
      //CASE -판매자가 판매취소 한 경우 혹은 구매자가 구매 취소 한 경우
      else if (sellResult === "cancel") {
        await User.updateOne(
          {
            account: sellerAccount,
          },
          { $pull: { selltokenList: { tokenId: tokenId } } }
        );
        await User.updateOne(
          { account: sellerAccount },
          {
            $push: {
              tokenList: {
                tokenId: findToken.tokenId,
                imageUrl: findToken.imageUrl,
                name: findToken.name,
                description: findToken.description,
              },
            },
          }
        );
        console.log("판매 취소!");
        // return res.status(201).json({ success: true, msg: "판매 취소!" });
      }
      return res.status(201).json({ success: true });
    } catch (err) {}
    //CASE - 판매 대기
    return res.status(401).json({ success: false, msg: "판매에러!" });
  },
};
