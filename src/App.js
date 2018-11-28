import React, { Component } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen'
import NextScreen from './Components/NextScreen'
import ServiceScreen from './Components/ServiceScreen'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeScreen />
        <NextScreen />
        <ServiceScreen />
        <Footer />
      </div>
    );
  }
}

export default App;
