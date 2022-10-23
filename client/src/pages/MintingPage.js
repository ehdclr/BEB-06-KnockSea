import React, { useState, useRef, useMemo } from "react";
import "../assets/MintingPage.css";
import BlankImage from "../assets/img/uploadImage.png";

const MintingPage = () => {
  //input 값 상태관리
  const [metadata, setMetadata] = useState({
    name: "",
    desc: "",
    src: "",
  });

  // const { name, desc, src } = metadata;

  const onChange = (e) => {
    const { name, value } = e.target;
    setMetadata({
      ...metadata,
      [name]: value,
    });
  };

  //img 상태관리
  const [imgFile, setImgFile] = useState({});
  const fileInputRef = useRef(null);

  const handleClickFileInput = (e) => {
    fileInputRef.current.click();
    console.log(imgFile);
  };

  const uploadImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImgFile(url);
    setMetadata({
      ...metadata,
      src: url,
    });
    console.log(metadata);
  };

  const showImage = useMemo(() => {
    if (Object.keys(imgFile).length === 0) {
      return <img className="image" src={BlankImage} width="300px" />;
    } else
      return (
        <img className="image" src={imgFile} onClick={handleClickFileInput} />
      );
  });

  //create 버튼 클릭
  const createHandler = (e) => {
    console.log(metadata);
  };

  return (
    <React.Fragment>
      <h1 className="minting-title">Create New Item</h1>
      <h2 className="minting-subtitle">NFT Image Upload</h2>
      <div>
        {showImage}
        <input
          name="src"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={uploadImage}
        />
        <button className="button " onClick={handleClickFileInput}>
          Upload
        </button>
      </div>
      <h2 className="minting-subtitle">NFT Name</h2>
      <input
        name="name"
        type="text"
        className="input"
        onChange={onChange}
      ></input>
      <h2 className="minting-subtitle">NFT Description</h2>
      <div>
        <textarea name="desc" className="form" onChange={onChange} />
      </div>
      <button className="button" onClick={createHandler}>
        Create
      </button>
    </React.Fragment>
  );
};

export default MintingPage;
