import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "../assets/Nav.css";

function Nav() {
  const [account, setAccount] = useState("");
  const [active, setActive] = useState(false);
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (account && active) {
      axios
        .post(
          "http://localhost:5000/users/login",
          { account, active },
          {
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          localStorage.setItem("userId", account);
        });
    }
  }, [account, active]);

  //로그인
  const onClickConnect = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
        console.log(accounts);
        setActive(true);
      } else {
        alert("Install Metamask!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //로그아웃
  const onClickDisConnect = async () => {
    setAccount(account === "");
    await axios
      .post(
        "http://localhost:5000/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setActive(false);
          localStorage.removeItem("userId");
        }
      });
  };

  return (
    <div className="wrapper">
      <Link to="/">
        <div className="logoContainer">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmeYuyNj6JwtNspPTqabkS3MBi7zDe6dAob957b61X5XJn"
            width="40"
            height="40"
            alt=""
          />
          <div className="logoText">KnockSea</div>
        </div>
      </Link>
      <div className="searchBar">
        <div className="searchIcon">
          <AiOutlineSearch />
        </div>
        <input
          className="searchInput"
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className="headerItems">
        <Link to="/explore">
          <div className="headerItem">Explore</div>
        </Link>

        <div>
          <a className="headerItem" href="https://opensea.io/rankings">
            Stats
          </a>
        </div>

        <div>
          <a className="headerItem" href="https://support.opensea.io/hc/en-us">
            Resources
          </a>
        </div>

        <Link to="/create">
          <div className="headerItem">Create</div>
        </Link>

        <Link to="/profile">
          <div className="headerItem">Profile</div>
        </Link>

        <div>
          {account ? (
            <div>
              <button
                className="disconnectedButton"
                onClick={onClickDisConnect}
              >
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <div>
              <button className="connectedButton" onClick={onClickConnect}>
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
