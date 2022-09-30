import axios from 'axios';
import webConfig from '../config';

const getJsonByFilter = (jsonObj,keyFieldName,keyFieldValue) => {



} 

const filterItems = (arr, field, value) => {

  if (field != null) {
    return arr.filter((item) => {
      return item[field] === value;
    })
  }
} 

const al = () => {
     alert(' Newutil Service') ;
}

export const THBath = (value) =>
  new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
  }).format(value);


export default { getJsonByFilter, filterItems,al,THBath
}