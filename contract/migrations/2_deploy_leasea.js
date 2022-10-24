const KnockSeaNFT = artifacts.require("KnockSeaNFT");
const KnockSeaMarket = artifacts.require("KnockSeaMarket");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(KnockSeaMarket);
    await deployer.deploy(KnockSeaNFT, KnockSeaMarket.address);
  })
};
