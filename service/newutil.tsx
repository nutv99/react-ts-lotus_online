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


export default { getJsonByFilter, filterItems,al
}