const express = require("express");
const router = express.Router();
const {
  mintingController,
  usersInfoController,
  usersController,
  dealController,
} = require("../controller/index.js");

const { isLoggedIn, isNotLoggedIn } = require("../middleware/auth");

//사용자 민팅(로그인한 상태)
router.post("/users/minting", isLoggedIn, mintingController.post);
//민팅한 모든 NftList 가져오기(로그인안한 상태)
router.get("/nftlist", isNotLoggedIn, mintingController.get);

//사용자 정보 가져오기(로그인한 상태)
router.get("/users/mypage", isLoggedIn, usersInfoController.get);

//로그인(로그인 안한 상태)
router.post("/users/login", isNotLoggedIn, usersController.login.post);

//로그아웃(로그인한 상태)
router.get("/users/logout", isLoggedIn, usersController.logout.get);

//판매(로그인한 상태)
//테스트중 로그인 안한상태로 냅두기
router.post("/deal/sell", isLoggedIn, dealController.sell.post);

module.exports = router;
