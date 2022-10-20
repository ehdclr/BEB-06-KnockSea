const express = require("express");
const router = express.Router();
const { mintingController } = require("../controller/index.js");

//action : 민팅
router.post("/minting", mintingController.post);

// router.get("/users/mypage", usersController.get);

// router.post()

module.exports = router;
