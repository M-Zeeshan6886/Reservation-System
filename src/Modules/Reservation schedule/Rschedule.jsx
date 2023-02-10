import React from "react";
import SideBar from "../../Common components/SideBar/SideBar";
import "./Rschudule.scss";
import Search from "../../assets/HomeAssets/search.png";
import Bell from "../../assets/HomeAssets/topIcon.svg";
import proficon from "../../assets/HomeAssets/proficon.png";
import calender from "../../assets/HomeAssets/calendar.png";
import UserAdd from "../../assets/HomeAssets/userAdd.png";
import plus from "../../assets/HomeAssets/plus.png";
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
                  <img src={proficon} alt="ProfileImg" className="profileImg" />
                </div>
              </div>
              <div className="page-container-content-right-content-row1">
                <div className="page-container-content-right-content-row1-content">
                  <div className="page-container-content-right-content-row1-content-calander">
                    <img src={calender} alt="calender" />
                    <p>Mon 05/12</p>
                  </div>
                  <div className="page-container-content-right-content-row1-content-seats">
                    <div className="page-container-content-right-content-row1-content-seats-counts">
                      <h1>0</h1>
                      <div className="page-container-content-right-content-row1-content-seats-counts-img">
                        <span>Available Seat</span>
                        <img src={UserAdd} alt="UserAdd" />
                      </div>
                    </div>
                    <div className="page-container-content-right-content-row1-content-seats-creats">
                      <img src={plus} alt="plus" />
                      <p>CREATE</p>
                    </div>
                  </div>
                </div>
              </div>
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
