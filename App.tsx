import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';
import Demo from './Demo';
import MyFlatList from './components/myflatList';
import MyFlatListImage from './components/myflatListImage';

import BoxProduct from './components/boxProduct';

import Box1Col from './components/box1banner';
import Box2Col from './components/box2Col';

import PageProductDetail from './pages/productdetail';

import ApiService from './Apiservice';

// import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { ItemData } from './dataservice';
import * as CurrencyFormat from 'react-currency-format';
import lottie from 'lottie-web';
import BoxImage from './components/boxImage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import PersonList from './PersonalList';

import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Apiservice from './Apiservice';

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
    { name: 'Alice2', age: 29, country: 'Austria' },
    { name: 'Maithong2', age: 11, country: 'Thailand' },
    { name: 'Alice3', age: 29, country: 'Austria' },
    { name: 'Maithong3', age: 11, country: 'Thailand' },
    { name: 'Alice4', age: 29, country: 'Austria' },
    { name: 'Maithong4', age: 11, country: 'Thailand' },
  ];

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
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
      name: 'Alice2',
      age: 29,
      ImgName:
        'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
    },
    {
      name: 'Maithong2',
      age: 11,
      ImgName:
        'https://assets-global.website-files.com/600fe6e1ff56087409a9f096/605b5a558848493df14d2d13_ecommerce-product-photography.jpg',
    },
    {
      name: 'Alice3',
      age: 29,
      ImgName:
        'https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40281.jpg?w=2000',
    },
    {
      name: 'Maithong3',
      age: 11,
      ImgName:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&usqp=CAU',
    },
    {
      name: 'Alice4',
      age: 29,
      ImgName:
        'https://m.media-amazon.com/images/G/31/amazonservices/Blog/SOA_Ref_Blog_5_Focus_on_your_interests_while_deciding_on_a_product._SL1280_FMjpg_.jpg',
    },
    {
      name: 'Maithong4',
      age: 11,
      ImgName:
        'https://www.sellerapp.com/blog/wp-content/uploads/2017/01/lisiting.png',
    },
  ];

  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const count = 0;

  //const bb = ItemData;
  const [items, setItems] = useState(ItemData);
  const [users, setUsers] = useState([]);

  const [item2s, setItem2s] = useState([]);

  const dataClass: string = 'extraClass';
  const apicode1: string = 'a199';

  const myimage =
    'https://img.freepik.com/free-vector/perfume-fresh-aroma-glass-bottle-with-water-splash-blue-blurred-background_33099-1426.jpg?w=740&t=st=1664157944~exp=1664158544~hmac=0ae0995dcb2bfc7d7f9a1c3388a5793f3e588fc73abc486c1bcfc505adb9c68b';

  const myimage2 =
    'https://img.freepik.com/free-vector/shaving-foam-men-cosmetic-bottles-banner-with-mint_107791-2506.jpg?w=826&t=st=1664158541~exp=1664159141~hmac=e9c6f42f710610677f40c1a7b47c0331954ccad9a6b628d433ec9dd194a72170';

  const testApi = async () => {
    // Test Get DATA
    try {
      setLoading(true);
      // const usersData = await ApiService.httpGet(
      //   'dataservice/clsItemMaster.php'
      // );

      const usersData = await ApiService.axiosGet(
        'dataservice/clsItemMaster.php'
      );
      setUsers(usersData);

      //console.log('user from main', usersData);
      // alert(usersData[0].ItemName);
      // setItem2s(usersData);

      // // วิธีที่ 2 ไม่ใช้ service
      // axios
      //   .get('https://lovetoshopmall.com/dataservice/clsItemMaster.php')
      //   .then((res) => {
      //     // console.log('sssss', res.data);
      //     //const newTodos = [...res.data];
      //     const newTodos = res.data;
      //     // console.log('newTodo', newTodos);
      //     // console.log('Item2S-999', item2s);
      //     newTodos.map((item) => {
      //       //console.log(item);
      //       //setItem2s(item);
      //       item2s.push(item);
      //     });
      //     console.log('Ddddd', item2s);
      //   })
      //   .catch((error) => console.log(error));

      setLoading(false);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testApi();
  }, [count]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
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
      </div>

      <div>
        <MyFlatList todos={obj} />
        <MyFlatListImage todos={objImage} mycaption="สินค้าลดราคา" />
      </div>
      <div>
        <div>
          {/* <ul>
            {item2s.map((user) => {
              return <li key={user.ItemName}>Name: {user.ItemName}</li>;
            })}
          </ul> */}
        </div>
      </div>
      {/* <Box1Col myimage={myimage} />
      <Box1Col myimage={myimage2} />
      <Box2Col myimage1={myimage} myimage2={myimage2} /> */}
      {/* <BoxProduct todos={item2s} mycaption="สินค้าลดราคา" /> */}
      <BoxImage apicode={apicode1} mycaption="สินค้า BoxImageData" />
      {/* <ImageGallery items={images} /> */}

      {/* <PersonList /> */}
    </div>
  );
}
