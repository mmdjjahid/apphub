import React from "react";

import Banner from "../components/Banner/Banner";
import StatesSection from "../components/StatesSection/StatesSection";
import { Link, useLoaderData } from "react-router";
import TrendingApps from "../components/TrendingApps/TrendingApps";

const Home = () => {
  const allTrendingApps = useLoaderData();
  console.log(allTrendingApps);
  return (
    <div>
      <Banner></Banner>
      <StatesSection></StatesSection>
      <div className="max-w-8xl mx-auto my-0">
        <TrendingApps allTrendingApps={allTrendingApps}></TrendingApps>
        
      </div>
    </div>
  );
};

export default Home;
