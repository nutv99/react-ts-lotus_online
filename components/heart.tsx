import * as React from 'react';
import { useState } from 'react';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import * as sss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style.css';


export default function Heart() {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isBagActive, setIsBagActive] = useState(false);

  const handleHeartClick = () => {
    // 👇️ toggle
    setIsHeartActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleBagClick = () => {
    // 👇️ toggle
    setIsBagActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };


  return (
    <div>
      <div
        style={{
          border: 0 , 
          color: isHeartActive ? 'pink' : 'lightgrey',
        }}
        onClick={handleHeartClick}
      >
        <FontAwesomeIcon icon={sss.faHeartCircleCheck} />
      </div>
      <div
        style={{
          border: 0 , 
          color: isBagActive ? 'pink' : 'lightgrey',
        }}
        onClick={handleBagClick}
      >
       <FontAwesomeIcon icon={sss.faBagShopping} /> 
       

      </div>
       
  </div>


  );
}
