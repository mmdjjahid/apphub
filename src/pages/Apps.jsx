import React from "react";
import { useLoaderData } from "react-router";
import TrendApp from "../components/TrendingApps/TrendApp";

const Apps = () => {
  const allApps = useLoaderData();
  // console.log(allApps)
  return (
    <div>
      <h1 className="text-5xl text-[#001931] font-bold text-center mt-20 mb-4">
        Our All Applications
      </h1>
      <p className="mb-10 text-center text-xl font-normal text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="max-w-7xl mx-auto my-0">
        <div className="mb-4 flex justify-between items-center">
          <p className="text-2xl text-[#001931] font-semibold">
            ({allApps.length}) Apps Found
          </p>
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 md:mx-20'>
          {allApps.map((apps, index) => (
            <TrendApp key={index} apps={apps}></TrendApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
