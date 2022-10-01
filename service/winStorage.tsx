import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
  let storageData = JSON.parse(localStorage.getItem('shopData'));
  const filtered = storageData.filter((obj) => {
    return obj.membercode === memberid;
  });
  const filteredA = filtered[0].orderlist.filter((obj) => {
    return obj.itemCode === itemcode;
  });

  if (filteredA && filteredA.length > 0) {
    // Found
    console.log(
      ' Methood A1',
      'Found ' + memberid + '-' + itemcode + '=' + filteredA[0].numOrder
    );

    filteredA[0].numOrder = newOrder;
    localStorage.setItem('shopData', JSON.stringify(storageData));
  } else {
    console.log(' Methood A1', ' Not Found ' + memberid + '-' + itemcode);
  }
}

function getNumOrderOnLocal(
  memberid: string,
  itemcode: string,
  newOrder: number
) {
  let storageData = JSON.parse(localStorage.getItem('shopData'));
  const filtered = storageData.filter((obj) => {
    return obj.membercode === memberid;
  });
  const filteredA = filtered[0].orderlist.filter((obj) => {
    return obj.itemCode === itemcode;
  });

  if (filteredA && filteredA.length > 0) {
    // Found
    console.log(
      ' Methood A1',
      'Found ' + memberid + '-' + itemcode + '=' + filteredA[0].numOrder
    );

    return filteredA[0].numOrder ;
    
  } else {
    console.log(' Methood A1', ' Not Found ' + memberid + '-' + itemcode);
    return null ;
  }
}



export default { checkDataExists, setNewOrderOnLocal,getNumOrderOnLocal };
