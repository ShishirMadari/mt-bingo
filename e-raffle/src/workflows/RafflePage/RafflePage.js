import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';

// components
import Home from './../../components/home/Home';
import TicketForm from './../../components/ticketForm/TicketForm'


class RafflePage extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <TicketForm />
      </div>
    );
  }
}

export default RafflePage;
