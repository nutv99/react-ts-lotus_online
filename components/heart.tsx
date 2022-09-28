import * as React from 'react';
import { useState } from 'react';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import * as sss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style.css';

export default function Heart(heartid: string) {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isBagActive, setIsBagActive] = useState(false);

  const [heartID, setHeartID] = useState(heartid);
  console.log(heartid);
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

  const PushToStorage = () => {
    let cc = aaa.heartid;
    console.log('ccc=', cc);
    localStorage.setItem('HeartList', cc);
  };

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
