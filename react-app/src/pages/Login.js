import React from 'react';

import './css/Login.css';
import Links from '../components/Links.js';

function Login() {
  return (
    <div>
      <h1 className="login-h1">ARTHOLE</h1>
      <div className="login-wrapper">
        <h2 className="login-h2">Log In</h2>
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <input className="login-form__input" type="text" name="email" placeholder="Email Address" required />
          <input className="login-form__input" name="password" type="password" placeholder="Password" required />
          <button className="login-form__submit" type="submit">Log In</button>
        </form>
      </div>
      <Links />
    </div>
  )
}

export default Login;