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
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">200K+</div>
          <div className="tf-infoItem-label">Collections</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">10K+</div>
          <div className="tf-infoItem-label">Artists</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">456K+</div>
          <div className="tf-infoItem-label">Community</div>
        </div>
      </div>
    </div>
    
    <div className="tf-right">
      <div className="tf-right-diamond">
        <div className="tf-r-diamond-item">
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&w=128"alt="diamond-banner"/>

        </div>
        <div className="tf-r-diamond-item">
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gae/hP4JJhiY5yXu1mCvNycTke2O_xbtgIFfkLTjfT7C9TNKinkGpP2COikt7cwn0xqzoATRNC21wsiwy_Fe-MQ3PPTgRjkbbCfJf__L?auto=format&w=128"alt="diamond-banner"/>

        </div>
        <div className="tf-r-diamond-item">
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gcs/files/543630193cf32ac09c0356e767d2891e.gif?auto=format&w=1080"alt="diamond-banner"/>
            <img src="https://opensea.io/collection/infected-mob"></img>
        </div>
      </div>
    </div>

  </div>;
};

export default TopFold;
