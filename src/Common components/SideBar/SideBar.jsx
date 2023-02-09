import React from 'react';
import './SideBar.scss';
import SLogo from '../../assets/SignUpassets/Logo.svg';
import Dashicon from '../../assets/HomeAssets/dashicon.png';
import ChartIcon from '../../assets/HomeAssets/chart.svg';
import docIcon from '../../assets/HomeAssets/docicon.svg';
import UserIcon from '../../assets/HomeAssets/user.svg';
import SetIcon from '../../assets/HomeAssets/settings.svg';
import loutIcon from '../../assets/HomeAssets/logout.svg';
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container-content">
        <div className="sidebar-container-content-one">
          <img src={SLogo} alt="//Logo" />
          <h1>Branch Su Van Hanh</h1>
        </div>
        <div className="sidebar-container-content-two">
          <SideItems Itemname="Dashboard" Dashimg={Dashicon} />
          <SideItems Itemname="History" Dashimg={ChartIcon} />
          <SideItems Itemname="Users" Dashimg={UserIcon} />
          <SideItems Itemname="Settings" Dashimg={SetIcon} />
          <SideItems Itemname="Log Out" Dashimg={loutIcon} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;



const SideItems=( {Itemname, Dashimg} )=>{
    return (
      <div className="sitems-container">
        <div className="sitems-container-content">
            <img src={Dashimg} alt="dashicon" />
            <p> {Itemname} </p>
        </div>
      </div>
    );
}