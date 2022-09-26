import * as React from 'react';
import '../style.css';

function Box1Banner({ myimage }) {
  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    //
    <div>
      <img src={myimage} className="myBanner1Image" />
    </div>
  );
}

export default Box1Banner;
