import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/Profile.css";
import NFTpage from "./NFTpage";

const NFTdata = [
  {
    name: "KnockNFT",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/metamask-6432337-5326393@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT2",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/nft-5176479-4323415@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT3",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/cryptocurrency-art-3678195-3061790@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT4",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/ethereum-3443536-2879620@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT5",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/nft-logo-3678194-3061789@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT6",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/ethereum-plant-3678191-3061801@0.png?w=0&h=700&f=jpeg",
  },
  {
    name: "KnockNFT7",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/free/preview/premium-quality-3078217-2560925@0.png?w=0&h=700&f=jpeg",
  },
];

function ProfilePage() {
  /* 

const Profile = ({account, web3}) => {  
  const [isLoading, isSetLoading] = useState(true);
  const [tokenList, setTokenList] = useState([]);

  if (account == "Address not yet" || null || undefined) {window.alert("로그인 하세요.")}

  useEffect(() => {
    const tokenId = '';

    const dbRef = ref(getDatabase());
      get(child(dbRef, `Test/Tokenlist/${tokenId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {

            let jsonData = JSON.parse(JSON.stringify(snapshot.val()));
            const fiteredArray = jsonToArray(jsonData)
            .filter(token => token.tokenOwner.toUpperCase() == account.toUpperCase())

            setTokenList(fiteredArray);
            isSetLoading(false);

          } else {
            console.log("No data available");
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }, []);
  // console.log(tokenList);

  //json 다중 객체를 배열로 변환
  function jsonToArray(json){
    let result = [];
    let keys = Object.keys(json);
    keys.forEach(function(key){
      result.push(json[key]);
    });
    return result;
  }
  */
  const [NFTs, setNFTs] = React.useState(NFTdata);
  const userId = localStorage.getItem("userId");

  return (
    <div className="Conect-wallet">
      <div className="profile-header">
        <div className="profile-header-1">
          <h1 className="profile-header-title">Profile</h1>
        </div>
        <div className="profile-header-2">
          <img
            className="profile-header-2-image"
            src="https://static.opensea.io/general/ETH.svg"
          />
          {userId}
        </div>
      </div>

      <div className="profile-contents">
        <h3 className="profile-item-header">My NFT List</h3>
        <Divider />
        <Link to="/NFTpage">
          <div className="profile-itemCard">
            <img
              className="NFT-img"
              src="https://cdn-icons-png.flaticon.com/512/8049/8049553.png"
            />
          </div>
        </Link>
        {NFTs.map(function (NFTdata, index) {
          return (
            <div className="profile-itemCard">
              <img className="NFT-img" src={NFTdata.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );

  {
    /*
  return tokenContract? (
    <div className="Profile">
        지갑 연결이 안 된 경우 
      <div className={account ? "hidden" : ""}>
        <div className="alert alert-danger" role="alert">
          Please connect to your wallet first.
        </div>
      </div>

        지갑 연결이 된 경우 
      <div className={!account ? "hidden" : ""}>
        <div className="profile-header">
          <div className="profile-header-1">
            <h1 className="profile-header-title">Profile</h1>
          </div>
          <div className="profile-header-2">
            <img className="profile-header-2-image" src="https://static.opensea.io/general/ETH.svg" />
            <p className="account-address">{account}</p>
          </div>
        </div>

        <div className="profile-contents">
          <h3 className="profile-item-header">My NFT List</h3>
          <Divider />
            <div className="profile-items">
              {myTokenIds.map((tokenId) => <MyToken tokenId={tokenId} key={tokenId} />)}
            </div>
        </div>
      </div>
    </div>
  ): null;
  */
  }
}

export default ProfilePage;
