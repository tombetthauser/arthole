import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../store/session"

import './css/Login.css';
import Links from '../components/Links.js';

function Login() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (event) => {
    event.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) setErrors(data.errors);
  }

  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

  if (user) return <Redirect to="/demo" />;

  return (
    <div>
      <h1 className="login-h1">ARTHOLE</h1>
      <div className="login-wrapper">
        <h2 className="login-h2">Log In</h2>
        <form className="login-form" onSubmit={onLogin}>
          <input className="login-form__input" placeholder="Email Address" name="email" type="text" value={email} onChange={updateEmail} required />
          <input className="login-form__input" placeholder="Password" name="password" type="password" value={password} onChange={updatePassword} required />
          <button className="login-form__submit" type="submit">Log In</button>
        </form>
      </div>
      <Links />
    </div>
  )
}

export default Login;