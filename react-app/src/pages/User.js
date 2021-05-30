import './css/User.css';
import Header from '../components/Header.js';
import ImageCard from '../components/ImageCard.js'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser, fetchUsers } from "../store/users";
import { Link, Redirect } from "react-router-dom";


const User = () => {
  const currentPathArr = window.location.pathname.split("/");
  const requestedUserId = currentPathArr[currentPathArr.length - 1]
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(async () => {
    if (!users[requestedUserId]) {
      const data = await dispatch(fetchUser(requestedUserId))
      console.log(data)
    }

    const imageWrapper = document.querySelector(".user-images-wrapper");

    // for (let i = 0; i < Math.floor(Math.random() * 22 + 3); i++) {
    //   imageWrapper.innerHTML = imageWrapper.innerHTML + "<ImageCard />"
    // }
  }, [users[requestedUserId]])

  // var names = ['Jake', 'Jon', 'Thruster'];
  // var namesList = names.map(function (name) {
  //   return <li>{name}</li>;
  // })

  const editButtons = (
      <>
        <button className="user-top-button">edit</button>
        <button className="user-top-button" onClick={() => history.push('/post')}>add image</button>
      </>
  )

  const likeUserButtons = (
      <>
        <button className="user-top-button">like user</button>
      </>
  )
  
  return (
    <div>
      <Header />
      <div className="user-wrapper">
        { user && users[requestedUserId] && user.id === users[requestedUserId].id ? editButtons : likeUserButtons }
        <h1 className="user-display_name">{users[requestedUserId] ? (users[requestedUserId].display_name || users[requestedUserId].username) : null }</h1>
        <h2 className="user-mfa">{ users[requestedUserId] && users[requestedUserId].mfa ? `MFA, ${users[requestedUserId].mfa}` : null }</h2>
        <h2 className="user-bfa">{ users[requestedUserId] && users[requestedUserId].bfa ? `BFA, ${users[requestedUserId].bfa}` : null }</h2>
        <h2 className="user-location">{ users[requestedUserId] ? users[requestedUserId].location : null }</h2>
        <a className="user-link_url" target="new" href={users[requestedUserId] ? users[requestedUserId].link_url : null}>{users[requestedUserId] ? (users[requestedUserId].link_text || users[requestedUserId].link_url) : null }</a>
      </div>
      <div className="user-images-wrapper">
        {Array(Math.floor(Math.random() * 22 + 3)).fill().map(() => <ImageCard />)}
        {/* <ImageCard />
        <ImageCard />
        <ImageCard /> */}
      </div>
    </div>
  )
}

export default User;