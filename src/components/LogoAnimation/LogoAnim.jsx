import React from "react";
import "./index.css";
import ImgLogo from "../../assets/img/signature.svg";
const LogoAnim = () => {
  return (
    <div className="logo">
      <div className="load">
        <div className="loader glow">
          <img className="signature" src={ImgLogo} alt="Logo" />
          {/* <span className='signature'></span> */}
        </div>
      </div>
    </div>
  );
};

export default LogoAnim;
