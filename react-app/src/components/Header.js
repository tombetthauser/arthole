import './css/Header.css';
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from "../store/session";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  let dropdown = null;
  const toggleDropdown = () => {
    dropdown.classList.toggle("dropdown--hidden");
  }

  const onLogout = async (event) => {
    await dispatch(logout());
    history.push("/")
  }

  const onLogin = () => {
    history.push("/login")
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
        { user && 
          <>
            <a className="dropdown_link">&gt; {user.username}</a>
          </>
        }
        { !user && 
          <>
            <a className="dropdown_link" onClick={() => history.push("/")}>&gt; home</a>
            <a className="dropdown_link" onClick={() => history.push("/login")}>&gt; login</a>
            <a className="dropdown_link" onClick={() => history.push("/signup")}>&gt; signup</a>
          </>
        }
        <a className="dropdown_link">&gt; messages</a>
        <a className="dropdown_link">&gt; map</a>
        <a className="dropdown_link">&gt; artists</a>
        { user && 
          <a className="dropdown_link" onClick={onLogout}>&gt; logout</a>
        }
      </div>
    </div>
  )
}

export default Header;