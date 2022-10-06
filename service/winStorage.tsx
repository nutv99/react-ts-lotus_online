import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewUtil from '../service/newutil';

function checkDataExists(storageName: string, keyName: string, keyValue: any) {
  let storageData = localStorage.getItem(storageName);
  if (!storageData) {
    return false;
  } else {
    return true;
  }
}

function setNewOrderOnLocal(
  memberid: string,
  itemcode: string,
  newOrder: number
) {
  newOrder++;
  memberid = 'guest';
  let storageData = JSON.parse(localStorage.getItem('shopData'));
  const filtered = storageData.filter((obj) => {
    return obj.customerid === memberid;
  });

  const filteredA = filtered[0].cartList.filter((obj) => {
    return obj.ItemCode === itemcode;
  });

  if (filteredA && filteredA.length > 0) {
    console.log(
      ' Methood A1',
      'Found ' + memberid + '-' + itemcode + '=' + filteredA[0].numCart + '; '
    );
    // console.log('Storage Data', JSON.stringify(storageData));
    filteredA[0].numCart = newOrder;
    localStorage.setItem('shopData', JSON.stringify(storageData));
  } else {
    console.log(' Method A1', ' Not Found ' + memberid + '-' + itemcode);
  }
}

function getNumOrderOnLocal(
  memberid: string,
  itemcode: string,
  newOrder: number
) {
  memberid = 'guest';

  let storageData = JSON.parse(localStorage.getItem('shopData'));

  if (storageData.length == 0) {
    return 0;
  }

  const filtered = storageData.filter((obj) => {
    return obj.customerid === memberid;
  });

  if (!filtered || filtered.length == 0) {
    console.log('Filred=', filtered.length);
    return -1;
  }
  // console.log('Filtered', filtered);
  const filteredA = filtered[0].cartList.filter((obj) => {
    return obj.ItemCode === itemcode;
  });

  if (filteredA && filteredA.length > 0) {
    // Found
    console.log(
      ' Methood A1',
      'Found ' + memberid + '-' + itemcode + '=' + filteredA[0].numCart
    );

    return filteredA[0].numCart;
  } else {
    console.log(' Methood A1', ' Not Found ' + memberid + '-' + itemcode);
    return null;
  }
}

const PushToStorage999 = (memberid, productid, numorder, ItemData) => {
  let HaveMember: boolean;
  let thisItemCode: string = productid;
  var filtered = [{}] as any;
  var localDataName = 'shopTest';

  // console.log('ccc999=', productid);
  // console.log('ccc888=', productid.ItemData.ItemCode);
  let workCase = 0;

  let storageData = JSON.parse(localStorage.getItem(localDataName));
  if (!storageData) {
    workCase = 1;
    productid.ItemData.numCart = numorder;
    let thisData = [
      {
        customerid: memberid,
        lang: 'th',
        wishlist: [],
        cartList: [productid.ItemData],
      },
    ];
    localStorage.setItem(localDataName, JSON.stringify(thisData));
    // return true;
  }

  if (workCase === 0 && storageData) {
    // storageData = JSON.parse(localStorage.getItem('shopTest'));
    // console.log('dddd', storageData);
    filtered = storageData.filter((obj) => {
      return obj.customerid === memberid;
    });
    if (filtered && filtered.length > 0) {
      // Have Member
      workCase = 2;
      HaveMember = true;
    } else {
      workCase = 3;
      HaveMember = false;
    }
  }

  if (workCase === 2) {
    // มี Member นี้อยู่แล้ว ตรวจ ItemCode
    //
    //alert(productid.ItemData.ItemCode);
    foundItem = false;
    let ItemPosition = 0;
    for (let i = 0; i <= filtered[0].cartList.length - 1; i++) {
      if (filtered[0].cartList[i].ItemCode === productid.ItemData.ItemCode) {
        ItemPosition = i;
        foundItem = true;
        break;
      }
    }

    if (foundItem) {
      storageData[0].cartList[ItemPosition].numCart = numorder;
      localStorage.setItem(localDataName, JSON.stringify(storageData));
    } else {
      productid.ItemData.numCart = numorder;
      storageData[0].cartList.push(productid.ItemData);
      localStorage.setItem(localDataName, JSON.stringify(storageData));
    }

    // console.log('Search Item', thisItemCode, '=', filteredA);
    // if (filteredA && filteredA.length > 0) {
    //   workCase = 4; // found Item ทำการ Update ยอดสินค้า
    // }
  }
  return;

  alert(workCase);

  if (workCase === 1) {
    let thisData = {
      customerid: memberid,
      lang: 'th',
      wishlist: [],
      cartList: [productid.ItemData],
    };
    localStorage.setItem('shopTest', JSON.stringify(thisData));
    return true;
  }

  const filteredA = filtered[0].orderlist.filter((obj) => {
    return obj.itemCode === thisItemCode;
  });

  var foundItem = false;
  if (storageData && storageData.length > 0) {
    for (let i = 0; i <= storageData.length - 1; i++) {
      //  console.log(oldlocalData[i].itemCode, thisItemCode);
      if (storageData[i].wishlist) {
        for (let j = 0; j <= storageData[i].wishlist.length - 1; j++) {
          if (storageData[i].wishlist[j] === thisItemCode) {
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

  if (storageData) {
    let localObj = [
      {
        membercode: 'guest',
        wishlist: [],
        itemCode: thisItemCode,
        orderList: [
          {
            itemCode: productid,
            numOrder: 111,
          },
        ],
      },
    ];
    // console.log('OldLocal', oldlocalData);
    // console.log('thisObj', localObj);
    let AllList = [...storageData, ...localObj];
    // console.log('Mix Data', [...oldlocalData, ...localObj]);
    //alert('Have Local Data');
    //AllList.push(localObj);
    // if (localData.length > 1) {

    // }
    //AllList.push(cc);
    localStorage.setItem('shopDataTmp99', JSON.stringify(AllList));
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

function getOrderData() {
  let order!: [{}];
  let ordTmp = JSON.parse(localStorage.getItem('shopData'));
  order = ordTmp[0].cartList;
  console.log(order);
  return order;
}

export default {
  checkDataExists,
  setNewOrderOnLocal,
  getNumOrderOnLocal,
  PushToStorage999,
  getOrderData,
};
