import { useState } from "react";
import Modal from "../util/Modal";
import "../assets/Input.css";

const SellNFT = (props) => {
  //지갑연결
  const [price, setPrice] = useState();

  const handleInputPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCompleteButton = () => {
    MakePrice(price);
  };

  const MakePrice = async (tokenAddr, tokenId) => {
    console.log(price);
    //nft 가격을 price로 설정 후 buybutton이 보여야 함
    // props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>List Item for Sale</h2>
      <p>Price</p>
      <p>
        <input
          className="input"
          type="text"
          onChange={handleInputPrice}
        ></input>
        ETH
      </p>
      <p>
        <button className="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className="button" onClick={handleCompleteButton}>
          Complete
        </button>
      </p>
    </Modal>
  );
};

export default SellNFT;
