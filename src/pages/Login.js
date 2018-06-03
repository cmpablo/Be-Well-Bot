import React from 'react';
import '../assets/css/style.css';

const Login = () => (
  <div className='container'>
    <h3>
      Welcome back!
    </h3>
    <hr />
    <form>
      <div className='form-group'>
        <label htmlFor='email-input'>Email address</label>
        <input type='email' className='form-control' id='email-input' placeholder='name@example.com' />
      
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-control' id='password' placeholder='********' />
      
        <button className='button' value='submit' id='submitBtn'>Submit</button>

      </div>
    </form>
  </div>
);

export default Login;