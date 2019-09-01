import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="recognition" width="400" />
      </div>
    </div>
  );
};

export default FaceRecognition;
