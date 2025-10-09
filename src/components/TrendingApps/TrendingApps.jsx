import React, { Suspense } from "react";
import TrendApp from "./TrendApp";
import { Link } from "react-router";

const TrendingApps = ({ allTrendingApps }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mt-20 mb-4 text-5xl text-center text-[#001931] font-bold ">
        Trending Apps
      </h3>
      <p className="mb-10 text-xl text-center text-[#627382] font-normal">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 md:mx-20">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          {allTrendingApps.map((apps, index) => (
            <TrendApp key={index} apps={apps}></TrendApp>
          ))}
        </Suspense>
      </div>
      <Link
        to="/apps"
        className="mt-10 mb-20 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
