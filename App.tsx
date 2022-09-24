import * as React from 'react';
import './style.css';
import Demo from './Demo';
import MyFlatList from './components/myflatList';
import MyFlatListImage from './components/myflatListImage';

import lottie from 'lottie-web';

//import { defineLordIconElement, LordIconElement } from 'lord-icon-element';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const objImage = [
    {
      name: 'Alice',
      age: 29,
      ImgName:
        'https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg?w=2000',
    },
    {
      name: 'Maithong',
      age: 11,
      ImgName:
        'https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?w=2000',
    },
    {
      name: 'Alice',
      age: 29,
      ImgName:
        'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
    },
    {
      name: 'Maithong',
      age: 11,
      ImgName:
        'https://assets-global.website-files.com/600fe6e1ff56087409a9f096/605b5a558848493df14d2d13_ecommerce-product-photography.jpg',
    },
    {
      name: 'Alice',
      age: 29,
      ImgName:
        'https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40281.jpg?w=2000',
    },
    {
      name: 'Maithong',
      age: 11,
      ImgName:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&usqp=CAU',
    },
    {
      name: 'Alice',
      age: 29,
      ImgName:
        'https://m.media-amazon.com/images/G/31/amazonservices/Blog/SOA_Ref_Blog_5_Focus_on_your_interests_while_deciding_on_a_product._SL1280_FMjpg_.jpg',
    },
    {
      name: 'Maithong',
      age: 11,
      ImgName:
        'https://www.sellerapp.com/blog/wp-content/uploads/2017/01/lisiting.png',
    },
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
      {/* <Demo /> */}
      <MyFlatList todos={obj} />
      <MyFlatListImage todos={objImage} />
    </div>
  );
}
