const mongoose = require("mongoose");

const NftSchema = mongoose.Schema({
  tokenId: {
    type: String,
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

  ownerAccount: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Nft", NftSchema);
