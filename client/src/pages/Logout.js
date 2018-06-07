import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div className='container'>
      <h1>Byyeeeeeeee!</h1>
      </div>
    )
  }
}

export default connect(null, actions)(Logout);