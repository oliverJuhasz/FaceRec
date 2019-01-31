import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import "tachyons";
import Tilt from "react-tilt";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/*
        <ImageLinkForm />
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
