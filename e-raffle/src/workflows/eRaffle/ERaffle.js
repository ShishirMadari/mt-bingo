import React, { Component } from 'react';
import './../../App.css';

// components
import Home from './../../components/home/Home';
import TicketForm from './../../components/ticketForm/TicketForm'
import TestForm from './../../components/ticketForm/TestForm'

import RafflePage from './../../components/raffle/RafflePage'

class ERaffle extends Component {
  render() {
    return (
      <div>
        <RafflePage />
      </div>
    );
  }
}

export default ERaffle;
