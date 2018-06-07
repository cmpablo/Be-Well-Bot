import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import '../assets/css/style.css';
import logo from '../assets/images/logo_stacked_dark.png';


class Signup extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container'>
        <Link to='/'><img src={logo} alt='be well bot logo' id='welcome-logo' /></Link>
        <br />
        <h3>
          Sign up
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
            <button className='button' id='submitBtn'>Submit</button>
          </form>
        </div>
       </div>
    )
  }
};

export default reduxForm({ form: 'signup' })(Signup);