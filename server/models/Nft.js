const mongoose = require("mongoose");

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
