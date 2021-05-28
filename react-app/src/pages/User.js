import './css/User.css';
import Header from '../components/Header.js';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser, fetchUsers } from "../store/users";
import { Link, Redirect } from "react-router-dom";


const User = () => {
  const currentPathArr = window.location.pathname.split("/");
  const requestedUserId = currentPathArr[currentPathArr.length - 1]
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!users[requestedUserId]) {
      const data = await dispatch(fetchUser(requestedUserId))
      console.log(data)
    }
  }, [users[requestedUserId]])
  
  return (
    <div>
      <Header />
      <div className="user-wrapper">
        <h1 className="user-display_name">{users[requestedUserId] ? (users[requestedUserId].display_name || users[requestedUserId].username) : null }</h1>
        <h2 className="user-bfa">{ users[requestedUserId] ? users[requestedUserId].bfa : null }</h2>
        <h2 className="user-mfa">{ users[requestedUserId] ? users[requestedUserId].mfa : null }</h2>
        <h2 className="user-location">{ users[requestedUserId] ? users[requestedUserId].location : null }</h2>
        <a className="user-link_url" target="new" href={users[requestedUserId] ? users[requestedUserId].link_url : null}>{users[requestedUserId] ? (users[requestedUserId].link_text || users[requestedUserId].link_url) : null }</a>
      </div>
    </div>
  )
}

export default User;