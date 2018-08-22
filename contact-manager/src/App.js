import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Jon Doe" email="john.doe@gmail.com" phone="123.456.7890" />
        <Contact name="Karen Smith" email="karen@gmail.com" phone="312.666.7890" />
        <Contact name="Rob Kistner" email="rob.k@gmail.com" phone="708.448.7955" />
      </div>
    );
  }
}

export default App;
