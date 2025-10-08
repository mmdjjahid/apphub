import React from "react";
import downIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
const TrendApp = ({apps}) => {
    console.log(apps)
    const {title,image,downloads,ratingAvg} = apps
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-full ">
        <figure className="px-2 pt-3">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-65"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{title}</h2>
          <div className="flex justify-between items-center">
            <div className="badge badge-soft badge-success"><img className="w-3" src={downIcon} alt="" />{downloads}M</div>
            <div className="badge badge-soft badge-warning"><img className="w-3" src={ratingIcon} alt="" />{ratingAvg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendApp;
