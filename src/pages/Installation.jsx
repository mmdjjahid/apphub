import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeApp } from "../components/Js/Store";
import InstalledItem from "../components/InstalledItem/InstalledItem";
import { toast } from "react-toastify";
const Installation = () => {
  const allAppData = useLoaderData();
  const [appLists, setAppList] = useState([]);
  const [sort, setSort] = useState("");

  const handelSort = (type) => {
    setSort(type);
    if (type === "Low-High") {
      const sortHTL = [...appLists].sort((a, b) => a.downloads - b.downloads);
      setAppList(sortHTL);
    }
    if (type === "High-Low") {
      const sortHTL = [...appLists].sort((a, b) => b.downloads - a.downloads);
      setAppList(sortHTL);
    }
  };

  const handleRemove = (id) => {
    removeApp(id);
    const appListFilter = appLists.filter((apps) => apps.id !== id);
    setAppList(appListFilter);
    toast("App Uninstalled!");
  };

  useEffect(() => {
    const storedApps = getStoredApp();
    const storedAppsInt = storedApps.map((appId) => parseInt(appId));
    const storedAppInfo = allAppData.filter((appData) =>
      storedAppsInt.includes(appData.id)
    );
    setAppList(storedAppInfo);
  }, [allAppData]);
  return (
    <div className="m-3 md:m-20 ">
      <div className="mt-20 mb-10">
        <p className="font-bold text-5xl text-[#001931] text-center mb-4">
          Your Installed Apps
        </p>
        <p className="font-normal text-xl text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-2xl text-[#001931]">
            {appLists.length} Apps Found
          </p>
          <details className="dropdown">
            <summary className="text-[#627382] btn m-1">
              Sort By Size {sort ? sort : ""}{" "}
              <i className="fa-solid fa-sort-down"></i>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={() => handelSort("High-Low")}>
                <a>High-Low</a>
              </li>
              <li onClick={() => handelSort("Low-High")}>
                <a>Low-High</a>
              </li>
            </ul>
          </details>
        </div>

        {appLists.map((appList) => (
          <InstalledItem
            handleRemove={handleRemove}
            appList={appList}
          ></InstalledItem>
        ))}
      </div>
    </div>
  );
};

export default Installation;
