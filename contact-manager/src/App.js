import React, { Component } from 'react';

import Header from './components/Header';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


class App extends Component {
  render() {
    return (
      <main className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="Jon Doe" email="john.doe@gmail.com" phone="123.456.7890" />
          <Contact name="Karen Smith" email="karen@gmail.com" phone="312.666.7890" />
          <Contact name="Rob Kistner" email="rob.k@gmail.com" phone="708.448.7955" />
        </div>
      </main>
    );
  }
}

export default App;
