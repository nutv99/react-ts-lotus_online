import * as React from 'react';
import { useState, useEffect } from 'react';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import * as sss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewUtil from '../service/newutil';
import '../style.css';

export default function Heart(heartid: string) {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isBagActive, setIsBagActive] = useState(false);

  const [heartID, setHeartID] = useState(heartid);
  //console.log(heartid);
  const aaa: any = heartid;

  const handleHeartClick = () => {
    // 👇️ toggle
    setIsHeartActive((current) => !current);

    PushToStorage();

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleBagClick = () => {
    // 👇️ toggle
    setIsBagActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const searchItem = () => {
    let thisItemCode: string = aaa.heartid;
    let oldlocalData = JSON.parse(localStorage.getItem('shopData'));
    var foundItem = false;
    if (oldlocalData) {
      for (let i = 0; i <= oldlocalData.length - 1; i++) {
       // console.log(oldlocalData[i].itemCode, thisItemCode);
        if (oldlocalData[i].itemCode === thisItemCode) {
          foundItem = true;
          setIsHeartActive(true);
          return true;
          break;
        }
      }
    }
    return false;
  };

  const PushToStorage = () => {
    let thisItemCode: string = aaa.heartid;
    //console.log('ccc=', cc);
    //let AllList: [];

    let oldlocalData = JSON.parse(localStorage.getItem('shopData'));
    var foundItem = false;
    if (oldlocalData && oldlocalData.length > 0) {
      for (let i = 0; i <= oldlocalData.length - 1; i++) {
      //  console.log(oldlocalData[i].itemCode, thisItemCode);
        for (let j = 0; j <= oldlocalData[i].wishlist.length - 1; j++) {
          if (oldlocalData[i].wishlist[j] === thisItemCode) {
            foundItem = true;
            //oldlocalData.splice(i, 1);
            //localStorage.setItem('shopData', JSON.stringify(oldlocalData));
            return;
            break;
          }
        }
      }
    }

    if (oldlocalData) {
      let localObj = [
        {
          membercode: 'guest',
          itemCode: thisItemCode,
        },
      ];
      // console.log('OldLocal', oldlocalData);
      // console.log('thisObj', localObj);
      let AllList = [...oldlocalData, ...localObj];
      // console.log('Mix Data', [...oldlocalData, ...localObj]);
      //alert('Have Local Data');
      //AllList.push(localObj);
      // if (localData.length > 1) {

      // }
      //AllList.push(cc);
      localStorage.setItem('shopData', JSON.stringify(AllList));
    } else {
      let localObj = [
        {
          membercode: 'guest',
          wishlist: [thisItemCode],
          itemCode: thisItemCode,
        },
      ];
      localStorage.setItem('shopData', JSON.stringify(localObj));
    }
    // let c = NewUtil.al();
    // let cc = aaa.heartid;
    // console.log('ccc=', cc);
  };

  useEffect(() => {
    searchItem();
  }, []);

  return (
    <div className="flex fullWidth">
      <div
        style={{
          border: 0,
          color: isHeartActive ? 'pink' : 'lightgrey',
        }}
        onClick={handleHeartClick}
      >
        <FontAwesomeIcon icon={sss.faHeartCircleCheck} />
      </div>
      <div
        className="mlAuto"
        style={{
          border: 0,
          color: isBagActive ? 'pink' : 'lightgrey',
        }}
        onClick={handleBagClick}
      >
        <FontAwesomeIcon icon={sss.faBagShopping} />
      </div>
    </div>
  );
}
