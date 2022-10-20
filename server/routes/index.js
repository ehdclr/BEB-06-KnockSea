const express = require("express");
const router = express.Router();
const { mintingController } = require("./../controller/index.js");

//유저에 대한 정보
//action : 민팅
router.post("/minting", mintingController.post);
router.get("/users/mypage", usersController.get);

//minting router
// router.post("/minting", mintingController.post);

// router.post()

module.exports = router;
