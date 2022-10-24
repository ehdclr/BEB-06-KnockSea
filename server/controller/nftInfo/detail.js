const User = require("../../models/User");
const Nftmeta = require("../../models/NftMeta");

module.exports = {
  get: async (req, res) => {
    // User 에서 사용자가 보유 중인 Nft 목록 중 하나를 보여줘야함
    // 사용자의 tokenList에서 tokenId 값으로 쿼리문 진행

    //tokenId는 반환 된 값
    //tokenId가 안된다면 imageUrl로 쿼리문 바꿔서 하면됨
    //owner 구하기가 관건!
    const tokenId = req.params.tokenId;
    console.log(tokenId);
    //해당 토큰 id로 검색하여
    const owner = await User.findOne({
      tokenList: { $elemMatch: { tokenId: `${tokenId}` } },
    });
    console.log(owner.account);

    const nftInfo = await Nftmeta.findOne({ tokenId: tokenId });
    const result = {
      owner: owner.account,
      tokenId: tokenId,
      name: nftInfo.name,
      description: nftInfo.description,
      imageUrl: nftInfo.imageUrl,
    };

    res.status(201).json({ tokenDetail: result, message: "토큰 디테일 " });
  },
};
