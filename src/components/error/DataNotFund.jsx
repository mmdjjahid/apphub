import React from 'react';
import AppNotFund from "../../assets/App-Error.png"
const DataNotFund = () => {
    return (
        <div className=' col-span-4 flex justify-center items-center'>
            {/* <img src={AppNotFund} alt="" /> */}
            <p className="text-5xl text-[#627382] font-bold text-center mt-20 mb-4">App Not Found</p>
        </div>
    );
};

export default DataNotFund;