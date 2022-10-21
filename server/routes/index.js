const express = require("express");
const router = express.Router();
const {
  mintingController,
  usersController,
} = require("../controller/index.js");

router.post("/users/minting", mintingController.post);
router.get("/users/mypage", usersController.get);

router.get("/nftlist", mintingController.get);

// router.post()

module.exports = router;
