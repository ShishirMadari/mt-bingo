import React, { Component } from 'react';
import { showComponent, components } from './../../redux/actions/uiActions';
import { submitTickets, removeWinningTicket } from './../../redux/actions/raffleActions';
import { connect } from "react-redux";

// components
import HomePage from './homePage/HomePage';
import TicketPage from './ticketPage/TicketPage';
import RafflePage from './raffle/RafflePage';
import PieLeaderboard from './pieLeaderboard/PieLeaderboard';
import Login from './login/Login';

import './../../App.css';


class MTbingo extends Component {

  runRaffle = () => {
    const entries = this.props.entries;
    let ticketArr = [];
    let numEntries = 0;
    Object.keys(entries).forEach(entry => {
      for (let i = 0; i < entries[entry]; i++) {
        ticketArr.push(entry);
        numEntries++;
      }
    });
    if (ticketArr.length === 0) { return "there are currently no entries" }
    const index = Math.floor(Math.random() * Math.floor(numEntries));
    const winner = ticketArr[index];
    this.props.removeWinningTicket(winner);
    return winner;
  }

  renderComponent = () => {
    switch (this.props.currentComponent) {
      case components.HOMEPAGE:
        return <HomePage showComponent={this.props.showComponent} />
      case components.TICKETFORM:
        return <TicketPage showComponent={this.props.showComponent} submitEntry={this.props.submitTickets} />
      case components.RAFFLE:
        return <RafflePage showComponent={this.props.showComponent} runRaffle={this.runRaffle} />
      case components.PIE_LEADERBOARD:
        return <PieLeaderboard showComponent={this.props.showComponent} pieEntries={this.props.pieEntries} />
      default:
        return <Login showComponent={this.props.showComponent} />
    };
  }


  render() {
    console.log(this.props.state);

    return (
      <div>
        {this.renderComponent()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentComponent: state.ui.app.currentComponent,
    entries: state.tickets,
    pieEntries: state.pieEntries,
    state: state
  };
};

const mapDispatchToProps = {
  showComponent,
  submitTickets,
  removeWinningTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(MTbingo);
