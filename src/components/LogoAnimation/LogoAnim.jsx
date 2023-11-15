import React from "react";
import "./index.css";
import ImgLogo from "../../assets/img/signature.svg";
const LogoAnim = () => {
  return (
  
        <div>
          <img className="signature" src={ImgLogo} alt="Logo" />
          {/* <span className='signature'></span> */}
        </div>

  );
};

export default LogoAnim;
