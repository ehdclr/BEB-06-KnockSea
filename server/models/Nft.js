const mongoose = require("mongoose");

//사용자에 대한  NFT 보유 목록
//사용 기능 - 민팅, 거래 사용자 보유중인 토큰 목록 불러올 때 사용
const NftSchema = mongoose.Schema({
  account: {
    type: String,
    required: true,
    unique: true,
  },
  tokenList: [
    new mongoose.Schema({
      tokenId: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      description: {
        type: String,
      },

      createAt: {
        type: Date,
        default: Date.now,
      },
    }),
  ],
});

module.exports = mongoose.model("Nft", NftSchema);
