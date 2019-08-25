import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/imageLinkForm";
import Rank from "./components/Rank";
import Particles from "react-particles-js";

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
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
