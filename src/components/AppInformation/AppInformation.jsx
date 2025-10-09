import downloadImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import revImg from "../../assets/icon-review.png";
import { addStore, removeApp } from "../Js/Store";
import { toast } from "react-toastify";

const AppInformation = ({ downloadBtn, setDownloadBtn, findId }) => {
  const { id, image, title, downloads, ratingAvg, reviews, size } = findId;
  const handleUninstallBtn = (id) => {
    removeApp(id);
    setDownloadBtn(false);
    toast("App Uninstalled!");
  };
  const handleDownloadBtn = (id) => {
    addStore(id);
    setDownloadBtn(true);
    toast("App install!");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <img className="w-[320px] h-[320px]" src={image} alt="" />
        <div className="md:ml-10 w-full">
          <div>
            <p className="text-3xl text-[#001931] font-bold">{title}</p>
            <p className="text-xl text-[#627382] font-normal">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-xl font-semibold ">
                productive.io
              </span>
            </p>
          </div>
          <div className="divider "></div>
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <img src={downloadImg} alt="" />
              <p className="text-base font-normal text-[#001931]">Downloads</p>
              <p className="font-extrabold text-[40px] text-[#001931]">
                {downloads}M
              </p>
            </div>
            <div>
              <img src={ratImg} alt="" />
              <p className="text-base font-normal text-[#001931]">
                Average Ratings
              </p>
              <p className="font-extrabold text-[40px] text-[#001931]">
                {ratingAvg}
              </p>
            </div>
            <div>
              <img src={revImg} alt="" />
              <p className="text-base font-normal text-[#001931]">
                Total Reviews
              </p>
              <p className="font-extrabold text-[40px] text-[#001931]">
                {reviews}K
              </p>
            </div>
          </div>
          {downloadBtn ? (
            <>
              <button disabled="disabled" className="mt-8 btn btn-accent">
                Installed
              </button>
              <button
                onClick={() => handleUninstallBtn(id)}
                className="ml-4 mt-8 btn btn-accent"
              >
                Uninstall Now
              </button>
            </>
          ) : (<>
            <button
              onClick={() => handleDownloadBtn(id)}
              className="mt-8 btn btn-accent "
            >
              Install Now ({size} MB)
            </button>
            
          </>)}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AppInformation;
