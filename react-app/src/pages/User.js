import './css/User.css';
import Header from '../components/Header.js';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser, fetchUsers } from "../store/users";

const User = () => {
  const currentPathArr = window.location.pathname.split("/");
  const requestedUsername = currentPathArr[currentPathArr.length - 1]
  const dispatch = useDispatch();

  // const getAllUsers = async () => {
  //   const data = await dispatch()
  // }

  useEffect(async () => {
    await dispatch(fetchUsers())
  })

  return (
    <div>
      <Header />
      {/* <h1>User Show Page</h1> */}
      <h1>User Show Page for {requestedUsername}</h1>
    </div>
  )
}

export default User;