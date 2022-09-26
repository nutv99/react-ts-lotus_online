import * as React from 'react';
import '../style.css';

function Box1Col({ myimage1, myimage2 }) {
  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    //
    <div className="flex">
      <img src={myimage1} className="myBanner2Image" />
      <img src={myimage2} className="myBanner2Image" />
    </div>
  );
}

export default Box1Col;
