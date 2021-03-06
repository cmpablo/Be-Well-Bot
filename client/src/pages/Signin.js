import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/css/style.css';

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
        
        <h3>
          Welcome back!
        </h3>
        <div className='auth-form'>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field className='email-field'
                name='email'
                type='text'
                component='input'
                autoComplete='none'
                placeholder=' email'
              />
            </fieldset>

            <fieldset>
              <Field className='pw-field'
                name='password'
                type='password'
                component='input'
                autoComplete='none'
                placeholder=' password'
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