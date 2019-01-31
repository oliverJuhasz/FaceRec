import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Logo from "./components/logo/logo";
import "tachyons";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800

    }
  }
}
}

const app = new Clarifai.App({
  apiKey: "e24c578150804dbf9b21a7d6c98014e8"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  };

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
    .predict(
    Clarifai.COLOR_MODEL,
        // URL
        "https://samples.clarifai.com/metro-north.jpg"
    )
    .then(function(response) {
        console.log(response);
        },
        function(err) {// there was an error}
    });
      }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
