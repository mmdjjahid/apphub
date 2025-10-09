import React from "react";
import donloadIcom from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
const InstalledItem = ({ appList, handleRemove }) => {
  return (
    <div className="mt-4">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box " src={appList.image} />
          </div>
          <div>
            <div className="text-[#001931]">{appList.title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-1">
                  <img className="w-3" src={donloadIcom} alt="" />
                  <p className="text-[#00D390]">{appList.downloads}M</p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-3" src={ratingIcon} alt="" />
                  <p className="text-[#FF8811]">{appList.ratingAvg}</p>
                </div>
                <p>{appList.size}Mb</p>
              </div>
            </div>
          </div>
          <button onClick={()=>handleRemove(appList.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
        </li>
      </ul>
    </div>
  );
};

export default InstalledItem;
