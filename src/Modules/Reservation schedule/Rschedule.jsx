import React from "react";
import SideBar from "../../Common components/SideBar/SideBar";
import "./Rschudule.scss";
import Search from "../../assets/HomeAssets/search.png";
import Bell from "../../assets/HomeAssets/topIcon.svg";
import proficon from "../../assets/HomeAssets/proficon.png";
import calender from "../../assets/HomeAssets/calendar.png";
import UserAdd from "../../assets/HomeAssets/userAdd.png";
import plus from "../../assets/HomeAssets/plus.png";
import arrowRight from "../../assets/HomeAssets/arrowright.png";
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
              <div className="page-container-content-right-content-row2">
                <div className="page-container-content-right-content-row2-content">
                  <table>
                    <thead>
                      <th>9:00 - 9:30 AM</th>
                      <th>9:30 - 10:00 AM</th>
                      <th>10:00 - 10:30 AM</th>
                      <th>10:30 - 11:00 AM</th>
                      <th>11:00 - 11:30 AM</th>
                      <th>11:30 - 12:00 AM</th>
                      <th className="th-arrow">
                        12:00 - 12:30 AM
                        <img src={arrowRight} alt="arrow" />
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="td-green">
                          <p>Alice</p>
                          <p>People:2</p>
                        </td>
                        <td className="td-pink">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-lightyallow">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>

                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>

                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>

                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-lightyallow">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-Empty"></td>
                        <td className="td-pink">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>

                        <td className="td-lightyallow">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-lightblue">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-Empty"></td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-pink">
                          <p>Bella</p>
                          <p>People:4</p>
                        </td>
                        <td className="td-Empty"></td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-empty2"></td>
                        <td className="td-Empty"></td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-empty2"></td>
                        <td className="td-Empty"></td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-empty2"></td>
                        <td className="td-Empty"></td>
                      </tr>
                      <tr>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-Empty"></td>
                        <td className="td-empty2"></td>
                        <td className="td-Empty"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="page-container-content-right-content-row3">
                <ClrDiv code=" #FCB96B" text="Pending" />
                <ClrDiv code="#93F8FF" text="Deposited" />
                <ClrDiv code="#FFF493" text="Waiting payment" />
                <ClrDiv code="#A3F394" text="Finished" />
                <ClrDiv code="#FCACAC" text="Cancelled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rschedule;

const ClrDiv = ({ code, text }) => {
  return (
    <div className="clrdiv">
      <div
        className="clrdiv-clrBox"
        style={{ backgroundColor: `${code}` }}
      ></div>
      <p> {text} </p>
    </div>
  );
};
