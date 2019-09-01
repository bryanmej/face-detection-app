import React, { useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/imageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "7e9f9f99be7a46aa87ac637652fe7fe0"
});

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
};

function App() {
  const [state, setInput] = useState({
    input: "",
    imageUrl: ""
  });

  const handleInput = e => {
    setInput({
      input: e.target.value
    });
    console.log(e.target.value);
  };

  const onSubmit = e => {
    e.persist();
    setInput(prevState => ({
      ...prevState,
      imageUrl: state.input
    }));
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     // URL
    //     "https://samples.clarifai.com/metro-north.jpg"
    //   )
    //   .then(
    //     function(response) {
    //       console.log(response);
    //     },
    //     function(err) {}
    //   );
  };

  // const onSubmit = e => {
  //   setInput({
  //     imageUrl: state.input
  //   });
  //   console.log(state);
  // };

  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm handleInput={handleInput} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={state.imageUrl} />
    </div>
  );
}

export default App;
