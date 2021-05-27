import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../store/session';
import './css/Login.css';
import Links from '../components/Links.js';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, repeatPassword));
    }
  }

  const updateUsername = e => setUsername(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);
  const updateRepeatPassword = e => setRepeatPassword(e.target.value);

  if (user) return <Redirect to="/demo"/>;

  return (
    <div>
      <h1 className="login-h1">ARTHOLE</h1>
      <div className="login-wrapper">
        <h2 className="login-h2">Sign Up</h2>
        <p className="signup-text">Anyone can sign up for Arthole, whether you're an artist, a gallerist, a collector or just a fan. You don't have to sign up to look at art or artists on the platform, but once you do you'll be able to connect with artists you like and message them when you've found a match.</p>
        {/* <p>
          <br /><br />
          Additionally if you're an artist you'll be able to upload your work to our internal feed and apply to have your work featured on the public-facing version of arthole. 
          <br /><br />
          In any case welcome and happy arting!
        </p> */}
        <form className="login-form" onSubmit={onSignUp}>
          <input
            className="login-form__input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
            required
          />
          <input
            className="login-form__input"
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={updateEmail}
            value={email}
            required
          />
          <input
            className="login-form__input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            required
          />
          <input
            className="login-form__input"
            name="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          />
          <button className="login-form__submit" type="submit">Sign Up</button>
        </form>
      </div>
      <Links />
    </div>
  )
}

export default Signup;