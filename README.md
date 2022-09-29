# react-ts-lotus_online

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-qjny3y)

https://cf.shopee.co.th/file/b62454da48c64fb507ddb297e13f78b5

/// Snippet
{
  "form99": {
    "scope": "html",
    "prefix": "form99",
    "body": [
      "// HTML FORM",
      "<!-- ",
      "1.เปลี่ยนชื่อ fromGroup ",
      "2.เพิ่ม Input ให้ครบ  ",
      "3.เชื่อมโยง Field ให้ตรงกับ sForm ใน ts",
      "-->",
      "<form [formGroup]='productForm' (ngSubmit)='onSubmit()'>",
      "  <div>",
      "    <label for='itemCode'>รหัสสินค้า</label>",
      "    <input",
      "      type='text'",
      "      id='message'",
      "      name='message'",
      "      #message",
      "      class=''",
      "      formControlName='itemCode'",
      "      dataName='fpercent'",
      "      modepatch='y'",
      "    />",
      "  </div>",
      "  <button type='submit' (click)='SaveData()'>Submit</button>",
      "</form> "
    ],
    "description": "Log output to console"
  },
  "react99": {
    "scope": "javascript,typescript",
    "prefix": "react99",
    "body": [
      "import * as React from 'react';",
      "import { useState, useEffect } from 'react';",
      "import axios from 'axios';",
      "import * as sIcon from '@fortawesome/free-solid-svg-icons';",
      "import './style.css';",
      "import ApiService from './Apiservice';",
      "import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';",
      "import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';",
      "import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';",

      "  ",
      "   ",
      " // Section 2 **************** Start Declare Var  ********",
      "const [item2s, setItem2s] = useState([]);",
      "const [loading, setLoading] = useState(false);",
      "const count = 0;",
      "    ",
      " //***********************   Start Declare Function  **********************   ",
      "const getDataAPI = async () => {",
      "try {",
      "     setLoading(true);",
      "      let endPoint = 'dataservice/clsItemMaster.php';",
      "      const usersData = await ApiService.axiosGet(endPoint);",
      "      setUsers(usersData);",
      "      console.log('user from main', usersData);",
      "      setLoading(false);",
      " } catch (err) {",
      "      console.error(err.message);",
      " } finally {",
      "      setLoading(false);",
      "}",
      "    ",
      " // ****************************  Start Declare UseEfect    *******************************",
      "   useEffect(() => {",
      "      getDataAPI();",
      "   },[count]);",
      "  ",
      " //******************************* Start Rendor  ********************  ",
      "return (",
      "   <div>",
      "     <div className='header99'>",
      "       {/* <ul>",
      "          {item2s.map((user) => {",
      "            return <li key={user.ItemName}>Name: {user.ItemName}</li>;",
      "          })}",
      "       </ul> */}",
      "     </div>",
      "   </div>",
      ")",
      "}"
    ],
    "description": "Log output to console"
  },
  "map99": {
    "scope": "javascript,typescript",
    "prefix": "map99",
    "body": [
      "<ul>",
      "  {item2s.map((user) => {",
      "       return <li key={user.ItemName}>Name: {user.ItemName}</li>;",
      "   })}",
      "</ul> "
    ],
    "description": "Map Array"
  },
  "find99": {
    "scope": "javascript,typescript",
    "prefix": "find99",
    "body": [
      "const found = arr.find(obj => {",
      "  return obj.id === 1;",
      "});"
    ],
    "description": "Map Array Object"
  },
  "filter99": {
    "scope": "javascript,typescript",
    "prefix": "filter99",
    "body": [
      "const filtered = arr.filter(obj => {",
      "  return obj.country === 'Austria';",
      "});"
    ],
    "description": "Filter Array Object"
  },

  "spread99": {
    "scope": "javascript,typescript",
    "prefix": "spread99",
    "body": [
      "const Obj1 = [{username:'A'},{username:'B'},{username:'C'}]",
      "const Obj2 = [{username:'D'},{username:'E'},{username:'F'}]",
      "// Merge Obj1,Obj2--> Obj3",
      "Obj3 = [...Obj1,...Obj2]" ,
      "Result Obj3 = [{username:'A'},{username:'B'},{username:'C'},{username:'D'},{username:'E'},{username:'F'}]" ,

      
      "});"
    ],
    "description": "Filter Array Object"
  }
}
