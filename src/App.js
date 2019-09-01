import React, { useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/imageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

// API Key for Clarifai
const app = new Clarifai.App({
  apiKey: "7e9f9f99be7a46aa87ac637652fe7fe0"
});

// Particle.js configuration
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

// Main app component
function App() {
  const [state, setInput] = useState({
    input: "",
    imageUrl: "",
    box: {
      topRow: 0,
      rightCol: 0,
      bottomRow: 0,
      leftCol: 0
    }
  });

  // Set input value
  const handleInput = e => {
    e.persist();
    setInput(prevState => ({
      ...prevState,
      input: e.target.value
    }));
  };

  // Set image url and api request
  const onSubmit = e => {
    setInput(prevState => ({
      ...prevState,
      imageUrl: state.input
    }));

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, state.input)
      .then(response => displayBox(calculateLocation(response)))
      .catch(err => console.log(err));
  };

  // Set box with frame coordinates
  const displayBox = box => {
    setInput(prevState => ({
      ...prevState,
      box: box
    }));
  };

  // Obtain frame coordinates
  const calculateLocation = data => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
  };

  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm handleInput={handleInput} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={state.imageUrl} box={state.box} />
    </div>
  );
}

export default App;
