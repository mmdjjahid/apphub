import React from 'react';

const AppDescription = ({findId}) => {
    return (
        <div>
            <p className="font-semibold text-2xl text-[#001931] mb-6">Description</p>

            <p className='font-normal text-xl text-[#627382] '>{findId.description}</p>
            
        </div>
    );
};

export default AppDescription;