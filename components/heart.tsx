import * as React from 'react';
import { useState, useEffect } from 'react';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import * as sss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewUtil from '../service/newutil';
//import {checkDataExists , setNewOrderOnLocal } from '../service/winStorage';
import winStorage from '../service/winStorage';
import '../style.css';

export default function Heart(heartid: string, showInput: string) {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isBagActive, setIsBagActive] = useState(false);

  const [showInputText, setshowInputText] = useState(heartid.showInput);

  const [numOrder, setnumOrder] = useState(1);

  const [heartID, setHeartID] = useState(heartid);

  //console.log('showInput999 ' ,showInput);
  //console.log('showInput999 ', heartid.showInput);
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
      let numOrder = winStorage.getNumOrderOnLocal('guest',thisItemCode,0) ; 
      setnumOrder(numOrder) ;
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
        if (oldlocalData[i].wishlist) {
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

  function addOrder(numOrder) {
    let newOrder = numOrder++;
    setnumOrder(newOrder);

    let memberid = 'guest'; 
    let itemcode = heartid.heartid ;
    winStorage.setNewOrderOnLocal(memberid,itemcode,newOrder) ;

    return ;
    if (winStorage.checkDataExists('shopData', '', '')) {
      console.log('Found Local');
    } else {
      console.log('Not Found Local');
    }

    // let storageData = JSON.parse(localStorage.getItem('shopData'));
    let storageData = JSON.parse(localStorage.getItem('tmpDataShop'));
    const filtered = storageData.filter((obj) => {
      return obj.membercode === 'guest';
    });

    let thisOrder = {
      "itemCode": heartid.heartid ,
      "numOrder":newOrder
    }
    const filtered2 = filtered[0].orderlist;
    console.log('Filtered2', filtered2,' len', filtered2.length); 

    let foundOrder = false;
    for (let i=0;i<=filtered2.length-1;i++) {
       if (filtered2[i].itemCode === heartid.heartid) {
           foundOrder= true ;
           filtered2[i].numOrder = newOrder ;
       }
    }
    console.log('Found',foundOrder)  ;
    
    if (!foundOrder) {
        filtered2.push(thisOrder) ;
    } else {

    }
    localStorage.setItem('tmpDataShop',JSON.stringify(storageData)) ;
    



    
  }

  function subOrder(numOrder) {
    let newOrder = numOrder--;
    numOrder > -1 ? setnumOrder(newOrder) : newOrder;
    let memberid = 'guest'; 
    let itemcode = heartid.heartid ;
    winStorage.setNewOrderOnLocal(memberid,itemcode,newOrder) ;
    return;


    // Filter 2 Level Method-1
    let storageData = JSON.parse(localStorage.getItem('tmpDataShop'));
    const filtered = storageData.filter((obj) => {
      return obj.membercode === 'guest';
    });    
    const filteredA = filtered[0].orderlist.filter((obj) => {
      return obj.itemCode === heartid.heartid;
    });

    if (filteredA) {
      console.log(' Methood 1','Found ' + heartid.heartid) ;
    } else {
      console.log(' Method 1',' Not Found ' + heartid.heartid) ;
    }

    



    


    let thisOrder = {
      "itemCode": heartid.heartid ,
      "numOrder":newOrder
    }
    const filtered2 = filtered[0].orderlist;
    console.log('Filtered2', filtered2,' len', filtered2.length); 

    let foundOrder = false;
    for (let i=0;i<=filtered2.length-1;i++) {
       if (filtered2[i].itemCode === heartid.heartid) {
           foundOrder= true ;
           filtered2[i].numOrder = newOrder ;
       }
    }
    console.log('Found',foundOrder)  ;
    
    if (!foundOrder) {
        filtered2.push(thisOrder) ;
    } else {

    }
    localStorage.setItem('tmpDataShop',JSON.stringify(storageData)) ;
    localStorage.setItem('shopData',JSON.stringify(storageData)) ;
  }

  const numInput = () => {
    return (
      <div className="mlAuto">
        <button className="btnSub" onClick={() => subOrder(numOrder - 1)}>
          -
        </button>
        <input type="text" className="txtnumOrder" value={numOrder} />
        <button className="btnAdd" onClick={() => addOrder(numOrder + 1)}>
          +
        </button>
      </div>
    );
  };

  const btnAddBasket= () => {
   return (
    <div className="flex center">
      <button style={{marginRight:20}}>สั่งซื้อทันที</button>
      <button onClick={AddToBasket} >เพิ่มไปยังตะกร้าสินค้า</button>
    </div>

   )
  }

  const AddToBasket = () => {
    
    let memberid = 'guest' ;
    winStorage.PushToStorage999(memberid,heartID,numOrder) ;
  }

  

  return (
  <div>  
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
      {showInputText == 'y' ? numInput() : ''}

      <div
        className="mlAuto"
        style={{
          border: 0,
          color: isBagActive ? 'pink' : 'lightgrey',
        }}
        onClick={handleBagClick}
      >
        <FontAwesomeIcon icon={sss.faBagShopping} />
        <div className="myBadge">{numOrder}</div>
      </div>
      
    </div>
    {showInputText == 'y' ? btnAddBasket() : ''}

  </div>  
  );
}
