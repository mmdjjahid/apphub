import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import TrendApp from "../components/TrendingApps/TrendApp";
import Search from "../components/Search/Search";
import DataNotFund from "../components/error/DataNotFund";

const Apps = () => {
  const allApps = useLoaderData();
  // const [search, setSearch] = useState("");
  const [found, setFound] = useState(true);
  const [appData, setAppData] = useState([]);
  // console.log(appData)
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    // setSearch(searchValue);

    const filterSearch = allApps.filter((allData) =>
      allData.title.includes(searchValue)
    );
    if (filterSearch.length === 0) {
      setFound(false);
    } else {
      setFound(true);
    }
    console.log(filterSearch);
    console.log(found);
    setAppData([...filterSearch]);
  };
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
          <Search handleSearch={handleSearch}></Search>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 md:mx-20">
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            {found ? (
              <Suspense fallback="Loading...">
                {appData.length === 0
                  ? allApps.map((apps, index) => (
                      <TrendApp key={index} apps={apps}></TrendApp>
                    ))
                  : appData.map((apps, index) => (
                      <TrendApp key={index} apps={apps}></TrendApp>
                    ))}
              </Suspense>
            ) : (
              <DataNotFund></DataNotFund>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Apps;
