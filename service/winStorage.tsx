import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function checkDataExists (storageName:string,keyName :string,keyValue:any)  { 

let storageData = localStorage.getItem(storageName) ;
if (!storageData ) {
  return false ;
} else {
  return true ;
}

} 


export default  checkDataExists  ;