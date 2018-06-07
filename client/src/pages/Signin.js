import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/css/style.css';
import logo from '../assets/images/logo_stacked_dark.png';


class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container'>
        <Link to='/'><img src={logo} alt='be well bot logo' id='welcome-logo' /></Link>
        <br />
        <h3>
          Sign In
        </h3>
        <hr />
        <div className='signup-form'>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <label>Email</label>
              <Field
                name='email'
                type='text'
                component='input'
                autoComplete='none'
              />
            </fieldset>

            <fieldset>
              <label>Password</label>
              <Field
                name='password'
                type='password'
                component='input'
                autoComplete='none'
              />
            </fieldset>
            <div>
              {this.props.errorMessage}
            </div>
            <button className='button' id='submitBtn'>Submit</button>
          </form>
        </div>
       </div>
    )
  }
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose (
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);