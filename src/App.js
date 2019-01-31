import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Logo from "./components/logo/logo";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
