const Nft = require("../../models/Nft");

module.exports = {
  get: async (req, res) => {
    try {
      //TODO :모든 NFT 데이터들을 읽어오는 것 코드 작성
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      returnres.status(500).json({ success: false, message: "Server Error" });
    }
  },

  post: async (req, res) => {
    const { tokenId, imageUrl, name, description, owner } = req.body;
    try {
      //TODO: NFT 데이터들을 DATABASE에 저장하는 코드 작성
      const metaData = await Nft.create({
        tokenId: tokenId,
        imageUrl: imageUrl,
        name: name,
        description: description,
        ownerAccount: owner,
      });
      console.log(metaData);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "server Error" });
    }
  },
};
