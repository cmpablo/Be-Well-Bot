import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';

class Navbar extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className='mainNav'>
          <div className='navBtns'>
            <ul>
              <Link to='/dashboard'>
              <li><span className="fas fa-list-ul"></span></li>
              </Link>

              <Link to='/menu'>
              <li><span className="far fa-smile"></span></li>
              </Link>
              
              <Link to='/logout'>
              <li><span className="fas fa-sign-out-alt"></span></li>
              </Link>
            </ul>
          </div>  
        </div>
      );
    } 
  }

  render() {
    
    return (
      <div className='mainNav'>
        {this.renderLinks()}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navbar);
