import * as React from 'react';
import './style.css';
import Demo from './Demo';
import MyFlatList from './components/myflatList';

import lottie from 'lottie-web';

//import { defineLordIconElement, LordIconElement } from 'lord-icon-element';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

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
  let menu99 = ['aaa', 'bbb'];
  const obj = [
    { name: 'Alice', age: 29, country: 'Austria' },
    { name: 'Maithong', age: 11, country: 'Thailand' },
    { name: 'Alice', age: 29, country: 'Austria' },
    { name: 'Maithong', age: 11, country: 'Thailand' },
    { name: 'Alice', age: 29, country: 'Austria' },
    { name: 'Maithong', age: 11, country: 'Thailand' },
    { name: 'Alice', age: 29, country: 'Austria' },
    { name: 'Maithong', age: 11, country: 'Thailand' },
  ];

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
      <MyFlatList todos={obj} />
      <i className="fa-solid fa-user"></i>
    </div>
  );
}
