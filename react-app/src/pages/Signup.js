import React from 'react';
import './css/Login.css';
import Links from '../components/Links.js';

function Signup() {
  return (
    <div>
      <h1 className="login-h1">ARTHOLE</h1>
      <div className="login-wrapper">
        <h2 className="login-h2">Sign Up</h2>
        <p className="signup-text">Anyone can sign up for Arthole, whether you're an artist, a gallerist, a collector or just a fan. You don't have to have to sign up to look at art but once you do you'll be able to connect with artists you like and message them when you've found a match. 
        <br /><br />
        Additionally if you're an artist you'll be able to upload your work to our internal feed and apply to have your work featured on the public-facing version of arthole. 
        <br /><br />
        In any case welcome and happy arting!</p>
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <input className="login-form__input" type="text" name="username" placeholder="Full Name" required />
          <input className="login-form__input" type="text" name="email" placeholder="Email Address" required />
          <input className="login-form__input" name="password" type="password" placeholder="Password" required />
          <button className="login-form__submit" type="submit">Sign Up</button>
        </form>
      </div>
      <Links />
    </div>
  )
}

export default Signup;