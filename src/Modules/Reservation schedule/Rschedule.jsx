import React from "react";
import SideBar from "../../Common components/SideBar/SideBar";
import "./Rschudule.scss";

const Rschedule = () => {
  return (
    <>
      <div className="page-container">
        <div className="page-container-content">
            <div className="page-container-content-left">
                <SideBar />
            </div>
            <div className="page-container-content-right"></div>
        </div>
      </div>
    </>
  );
};

export default Rschedule;
