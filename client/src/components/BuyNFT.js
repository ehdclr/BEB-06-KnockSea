import Modal from "../util/Modal";
import "../assets/Button.css";

const BuyNFT = (props) => {
  //지갑 연결여부 확인
  //지갑으로 buy 함수 실행 요청(useEffect 사용?)

  return (
    <Modal onClose={props.onClose}>
      <h2>Approve Purchase</h2>
      {/* <p>{props.NFTname}</p>
      <img src={props.NFTimg} />
      <p>Price: {props.price}</p> */}
      <p>Metamask 지갑에서 확인 버튼을 눌러 구매를 승인해주세요.</p>
      <p>
        <button className="button" onClick={props.onClose}>
          Cancel
        </button>
      </p>
    </Modal>
  );
};

export default BuyNFT;
