import React from "react";
import SideBar from "../../Common components/SideBar/SideBar";
import "./Rschudule.scss";
import Search from '../../assets/HomeAssets/search.png';
import Bell from "../../assets/HomeAssets/topIcon.svg";
import proficon from "../../assets/HomeAssets/proficon.png";
const Rschedule = () => {
  return (
    <>
      <div className="page-container">
        <div className="page-container-content">
          <div className="page-container-content-left">
            <SideBar />
          </div>
          <div className="page-container-content-right">
            <div className="page-container-content-right-content">
              <div className="page-container-content-right-content-row">
                <h1>RESERVATION SCHEDULE</h1>
                <div className="page-container-content-right-content-row-bar">
                  <img src={Search} alt="search" className="simg" />
                  <input type="search" placeholder="Search everything" />
                  <div className="page-container-content-right-content-row-bar-bellicon">
                    <img src={Bell} alt="bellicon" className="bimg" />
                  </div>
                  <img src={proficon} alt="ProfileImg"  className="profileImg"/>
                </div>
              </div>
              <div className="page-container-content-right-content-row1"></div>
              <div className="page-container-content-right-content-row2"></div>
              <div className="page-container-content-right-content-row3"></div>
              <div className="page-container-content-right-content-row4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rschedule;
