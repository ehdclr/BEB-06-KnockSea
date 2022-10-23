import { useState } from "react";
import Web3 from "web3";
import Modal from "../util/Modal";
import "../assets/Input.css";

const TransferNFT = (props) => {
  //지갑연결
  const [to, setTo] = useState();

  const handleInputData = (e) => {
    setTo(e.target.value);
  };

  const handleTransferButton = () => {
    TokenTranasfer(to);
  };

  const TokenTranasfer = async (tokenAddr, tokenId) => {
    console.log(to);
    //유효한 지갑 주소인지 확인
    //지갑으로 inputData에 기재된 address에 transfer 요청
    // props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>Transfer</h2>
      <p>Address</p>
      <input type="text" className="input" onChange={handleInputData}></input>
      <p>
        <button className="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className="button" onClick={handleTransferButton}>
          Transfer
        </button>
      </p>
    </Modal>
  );
};

export default TransferNFT;
