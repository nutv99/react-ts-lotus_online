import * as React from 'react';
import './style.css';
import Demo from './Demo';
import MyFlatList from './components/myflatList';

function MytopBar() {
  return (
    <div className="topbar flex">
      <div>ดาวน์โหลด</div>
      <div>ข้อมูลข่าวสาร</div>
      <div className="mlauto mr10">EN/TH</div>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  let menu = ['aaa', 'bbb'];
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
      {/* <Welcome name="Edite" /> */}
      <MytopBar />
      <Demo />
      <MyFlatList name="menu" />
    </div>
  );
}
