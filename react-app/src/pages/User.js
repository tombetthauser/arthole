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
      <h1>{users[requestedUserId] ? (users[requestedUserId].display_name || users[requestedUserId].username) : null }</h1>
      <h2>{ users[requestedUserId] ? users[requestedUserId].location : null }</h2>
      <h3>{ users[requestedUserId] ? users[requestedUserId].bfa : null }</h3>
      <h3>{ users[requestedUserId] ? users[requestedUserId].mfa : null }</h3>
      <a target="new" href={users[requestedUserId] ? users[requestedUserId].link_url : null}>{users[requestedUserId] ? (users[requestedUserId].link_text || users[requestedUserId].link_url) : null }</a>
      {/* <p target="new">{ users[requestedUserId] ? null : "No such user!" }</p> */}
    </div>
  )
}

export default User;