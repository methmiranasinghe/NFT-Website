import React from "react";
import Button from "../Button";
import "./topFold.css";

const TopFold = () => {
  return <div className="topfold absolute-center">
    <div className="tf-left">
      <div className="tf-heading">Discover Collect & Sell <span className="heading-gradient"> Extraodinary </span> NFT's</div>
      <div className="tf-description">
      “If you are an artist and still don't use NFT (Non-Fungible Token), 
      you are potentially missing millions of dollars.” ― Olawale Daniel
      </div>
      <div className="tf-left-btns">
        <Button btnType='PRIMARY' btnText='EXPLORE'/>
        <Button btnType='SECONDARY' btnText='Create' customClass='tf-left-secondary-btn'/>
      </div>
      <div className="tf-left-infoStats">
        <div className="tf-infoItem">
          <div className="info-item-count">200K+</div>
          <div className="info-item-label">Collections</div>
        </div>
      </div>
    </div>
    
    <div className="tf-right"></div>

  </div>;
};

export default TopFold;
