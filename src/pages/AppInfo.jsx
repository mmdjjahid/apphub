import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import AppInformation from "../components/AppInformation/AppInformation";
import AppChart from "../components/AppChart/AppChart";
import AppDescription from "../components/AppDescription/AppDescription";
import { getStoredApp } from "../components/Js/Store";

const AppInfo = () => {
  const { id } = useParams();
  const idType = parseInt(id);
  const allInfo = useLoaderData();
  const findId = allInfo.find((infoId) => infoId.id === idType);
  const [downloadBtn, setDownloadBtn] = useState(false);
  // console.log(findId.id);
  useEffect(() => {
    const findBtn = getStoredApp();
    if (findBtn.includes(findId.id)) {
      setDownloadBtn(true);
    } else setDownloadBtn(false);
  }, [findId]);

  return (
    <div className="m-3 md:m-20 ">
      <AppInformation
        downloadBtn={downloadBtn}
        setDownloadBtn={setDownloadBtn}
        findId={findId}
      ></AppInformation>
      <div className="divider "></div>
      <AppChart findId={findId}></AppChart>
      <div className="divider "></div>

      <AppDescription findId={findId}></AppDescription>
    </div>
  );
};

export default AppInfo;
