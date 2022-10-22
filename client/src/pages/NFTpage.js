import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TransferNFT from "../components/TransferNFT";
import BuyNFT from "../components/BuyNFT";
import SellNFT from "../components/SellNFT";
// import { getDatabase, ref, onValue } from "database"; // DB 코드는 임의로 정해 둔거에용!
// import styled from "styled-components";
import "../assets/NFTpage.css";

const NFTpage = () => {
  //     const [tokenObj, setTokenObj] = useState({tokenURL : "", tokenName : "", tokenOwner : ""});
  //     const tokenId =  window.location.href.slice(32);

  const [showTransfer, setShowTransfer] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showSell, setShowSell] = useState(false);

  const showTransferHandler = () => {
    setShowTransfer(true);
  };

  const hideTransferHandler = () => {
    setShowTransfer(false);
  };

  const showBuyHandler = () => {
    setShowBuy(true);
  };

  const hideBuyHandler = () => {
    setShowBuy(false);
  };

  const showSellHandler = () => {
    setShowSell(true);
  };

  const hideSellHandler = () => {
    setShowSell(false);
  };

  //     useEffect(()=> {
  //       const db = getDatabase();
  //       const TRef = ref(db, 'Test/Tokenlist/'+tokenId);
  //       onValue(TRef, (snapshot) => {
  //         if (snapshot.exists()) {
  //           setTokenObj(snapshot.val());
  //         }
  //           else {
  //             console.log("No data available");
  //           }
  //       });
  //     }, []);

  const TransferButton = () => {
    return (
      <button className="nft-button-component" onClick={showTransferHandler}>
        Transfer
      </button>
    );
  };

  const BuyButton = () => {
    return (
      <button className="nft-button-component" onClick={showBuyHandler}>
        Buy
      </button>
    );
  };

  const SellButton = () => {
    return (
      <button className="nft-button-component" onClick={showSellHandler}>
        Sell
      </button>
    );
  };

  // const isMine = (address) => {
  //   if (address.toUpperCase() == account.toUpperCase()) {
  //     return <SellNFT web3={web3} account={account} tokenId={tokenId} />
  //   } else {
  //       return <BuyNFT web3={web3} account={account} tokenId={tokenId} />
  //     }
  // }

  return (
    <div>
      {showTransfer && <TransferNFT onClose={hideTransferHandler} />}
      {showBuy && <BuyNFT onClose={hideBuyHandler} />}
      {showSell && <SellNFT onClose={hideSellHandler} />}
      <div id="nft-title"> NFTpage </div>
      <img
        className="nft-image"
        src="https://cdn-icons-png.flaticon.com/512/8049/8049553.png"
      />
      {/* <img className="nft-image" src={tokenObj.tokenURI} /> */}
      <div className="nft-info">
        <h1 className="nft-name">KnockSea NFT</h1>
        <div className="nft-owner">
          Owned by {"0x955403342daB010AFD7E098B1ADb2d4ba98F171f"}
          {/* {tokenObj.tokenOwner.length != 0
              ? tokenObj.tokenOwner.slice(0, 6)
              : ""}
            ...{" "} */}
        </div>
        {/* <div className="nft-price">Current price :</div> */}
        <h2 className="nft-Destitle">Description</h2>
        <p className="nft-description">
          BEB 06 부트캠프의 KnockSea 팀에서 야심차게 만든 NFT 입니다.
        </p>
        <div>
          <TransferButton />
          <SellButton />
        </div>
        <BuyButton />
        <div>
          <Link to="/explore">
            <button className="button">목록으로</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTpage;
