import React from 'react';
import './css/Landing.css';
import Links from '../components/Links.js'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="Home">
      <div className="navbar">
        <h1 className="navbar__h1">
          ARTHOLE
          {/* <span className="oshape-span"></span>LE */}
          </h1>
      </div>
      <div className="intro-text">
        <ul className="intro-text__large-list">
          <li>swipe</li>
          <li>connect</li>
          <li>find studio visits</li>
          <li>find peers</li>
          <li>find art</li>
        </ul>
        <ul className="intro-text__medium-list">
          <li> </li>
          <li>a confused exercise in futility</li>
          <li>no ads / no bots / no coherent business model</li>
          <li>built for free by deadbeat art hippies</li>
        </ul>
        <ul className="intro-text__links">
          <Links />
        </ul>
      </div>

    </div>
  );
}

export default Landing;
