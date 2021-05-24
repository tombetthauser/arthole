import './css/Header.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();

  let dropdown = null;
  const toggleDropdown = () => {
    dropdown.classList.toggle("dropdown--hidden");
  }

  useEffect(() => {
    dropdown = document.querySelector(".dropdown");
  })

  return (
    <div>
      <h1 className="header-h1">
        <span onClick={() => { history.push(`/`) }}>ARTHOLE</span>
        <span onClick={toggleDropdown} className="navburger-span"><div></div></span>
      </h1>
      <div className="dropdown dropdown--hidden">
        <a className="dropdown_link">&gt; home</a>
        {/* <a className="dropdown_link">&gt; settings</a> */}
        <a className="dropdown_link">&gt; messages</a>
        <a className="dropdown_link">&gt; map</a>
        <a className="dropdown_link">&gt; logout</a>
      </div>
    </div>
  )
}

export default Header;