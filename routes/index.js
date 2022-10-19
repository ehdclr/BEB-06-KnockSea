const express = require("express");
const router = express.Router();
const {
  nftmetaController,
  mintingController,
} = require("./../controller/index.js");

//nft-meta router
router.post("/nftmeta", nftmetaController.post);
router.get("/nftmeta", nftmetaController.get);

//minting router

// router.post()

module.exports = router;
