import React, { Component } from 'react';
import { showComponent, components } from './../../redux/actions/uiActions';
import { connect } from "react-redux";

// components
import HomePage from './../../components/homePage/HomePage';
import TicketForm from './../../components/ticketForm/TicketForm';
import RafflePage from './../../components/raffle/RafflePage';
import './../../App.css';





class ERaffle extends Component {

  renderComponent = () => {
    switch (this.props.currentComponent) {
      case components.HOMEPAGE:
        return <HomePage showComponent={this.props.showComponent} />
      case components.TICKETFORM:
        return <TicketForm showComponent={this.props.showComponent} />
      case components.RAFFLE:
        return <RafflePage showComponent={this.props.showComponent} />
      default:
        return <HomePage showComponent={this.props.showComponent} />
    };

    return <HomePage showComponent={this.props.showComponent} />
  }

  render() {
    return (
      <div>
        {this.renderComponent()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentComponent: state.ui.app.currentComponent
  };
};

const mapDispatchToProps = {
  showComponent
};

export default connect(mapStateToProps, mapDispatchToProps)(ERaffle);
