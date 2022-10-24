const express = require("express");
const router = express.Router();
const {
  mintingController,
  usersInfoController,
  usersController,
  dealController,
  nftInfoController,
} = require("../controller/index.js");

const { upload } = require("../middleware/uploads");

const { isLoggedIn, isNotLoggedIn } = require("../middleware/auth");

//사용자 민팅(로그인한 상태)
router.post(
  "/users/minting",
  isLoggedIn,
  upload.single("file"),
  mintingController.post
);
//민팅한 모든 NftList 가져오기(로그인안한 상태)
router.get("/nftlist", isNotLoggedIn, mintingController.get);

//사용자 정보 가져오기(로그인한 상태)
router.get("/users/mypage", isLoggedIn, usersInfoController.get);

//로그인(로그인 안한 상태)
router.post("/users/login", isNotLoggedIn, usersController.login.post);

//로그아웃(로그인한 상태)
router.post("/users/logout", isLoggedIn, usersController.logout.post);

//판매(로그인한 상태)
router.post("/deal/sell", isLoggedIn, dealController.sell.post);

//토큰 디테일
//메인페이지에서 들어가는 방법 , 마이페이지에서 클릭해서 들어가는 방법
router.get("/nftlist/nftdetail/:tokenId", nftInfoController.detail.get);
//axios /nftlist/nftdetail/:tokenId${tokenId}
module.exports = router;
