import React from "react";
import appLogo from "../../assets/logo.png";

const Loding = () => {
  return (
    <div className=" col-span-4 flex justify-center items-center">
      {/* <img src={AppNotFund} alt="" /> */}
      <div className="flex justify-center items-center text-5xl text-[#627382] font-bold text-center mt-20 mb-4">
        <span>App </span> 
        <img className="w-[50px]" src={appLogo} alt="" />{" "}
        <span> Loading</span>
      </div>
    </div>
  );
};

export default Loding;
