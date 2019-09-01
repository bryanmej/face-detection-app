import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  // if (imageUrl.length === 0) {
  //   return null;
  // }
  console.log(imageUrl);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} alt="recognition" width="400" />
        <div
          className="boundingBox"
          style={{
            top: box.topRow,
            left: box.leftCol,
            bottom: box.bottomRow,
            right: box.rightCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
