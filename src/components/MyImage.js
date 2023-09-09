import React from 'react';
import myImage from './venky.jpg'; // Import your image file

function MyImage() {
  return (
    <div className="image-container">
      <img src={myImage} alt="MyImage" className="centered-image" />
    </div>
  );
}

export default MyImage;
