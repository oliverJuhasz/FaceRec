import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/logo/logo";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/*
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
