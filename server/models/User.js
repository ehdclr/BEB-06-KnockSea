const mongoose = require("mongoose");

//사용자에 대한  NFT 보유 목록
//사용 기능 - 민팅, 거래 사용자 보유중인 토큰 목록 불러올 때 사용
const UserSchema = mongoose.Schema({
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
      },
      _id: false,
    }),
    ,
  ],
  selltokenList: [
    new mongoose.Schema({
      tokenId: {
        type: String,
        required: true,
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
      },
      _id: false,
    }),
  ],
});

module.exports = mongoose.model("User", UserSchema);
