import * as React from 'react';
import './style.css';

function topBar() {

  return (
    <div className="topbar flex">
    <div>ดาวน์โหลด</div>
    <div>ข้อมูลข่าวสาร</div>
    <div className="mlauto mr10">EN/TH</div>
  </div>
  )

}

export default function App() {
  return (
    <div className="header99">
      <div className="topbar flex">
        <div>ดาวน์โหลด</div>
        <div>ข้อมูลข่าวสาร</div>
        <div className="mlauto mr10">EN/TH</div>
      </div>

      <div className="topbar flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/800px-ZDF_logo%21_Logo_2021.svg.png"
          alt=""
          className="logo"
        />
        <div className="mlauto flex">
          <div>ข้อมูลข่าวสาร</div>
          <div className="mlauto ml10 mr10">EN/TH</div>
        </div>
      </div>
    </div>
  );
}
