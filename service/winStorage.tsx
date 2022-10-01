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
// const updateOrderData = (storageName) =>  {

//   let Data = localStorage.getItem(storageName) ;
//   Data = JSON.parse(Data);

// }

export default checkDataExists;
