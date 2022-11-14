import React from "react";
import "./button.css";

const Button = (props) => {
  const {btnType,btnText,btnOnClick,customClass} =props;
  return( 
  <div className={`${
    btnType==="PRIMARY"
      ?`button prinary-btn ${customClass}`
      :`button secondary-btn ${customClass}`
  }`}
  onClick={btnOnClick}> 
  {btnText} 
  
  </div>
  )
};

export default Button;
