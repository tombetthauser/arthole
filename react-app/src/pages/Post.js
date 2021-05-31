import './css/Demo.css';
import Header from '../components/Header.js'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import demoSet from '../assets/demo-urls.js'
import { useHistory } from "react-router-dom";

const Post = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [footerMessage, setFooterMessage] = useState(true);

  const hideFooterText = () => {
    const footer = document.querySelector(".demo-footer");
    footer.style.opacity = 0;
    setTimeout(() => { footer.classList.add("demo-footer__hidden") }, 500)
  }

  return (
    <div>
      <Header />
      <div className="login-wrapper">
        <h2 className="login-h2">New Image Upload</h2>
        <p className="signup-text">After you upload an image it will be added to your profile page. It will also be visible in the swipable feed of images for other users to view.</p>
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <input
            className="login-form__input"
            type="text"
            name="title"
            placeholder="Image Title"
            // onChange={updateUsername}
            // value={username}
            required
          />
          <input
            className="login-form__input"
            type="text"
            name="dimensions"
            placeholder="Artwork Dimensions (if applicable)"
            // onChange={updateEmail}
            // value={email}
            required
          />
          <input
            className="login-form__input"
            type="text"
            name="materials"
            placeholder="Artwork Materials (if applicable)"
            // onChange={updateEmail}
            // value={email}
            required
          />
          <input
            className="login-form__input"
            type="text"
            name="year"
            placeholder="Artwork / Image Year"
            // onChange={updateEmail}
            // value={email}
            required
          />
          <input
            className="login-form__input"
            type="file"
            name="image_file"
            // placeholder="Artwork / Image Year"
            // onChange={updateEmail}
            // value={email}
            required
          />
          <button className="login-form__submit" type="submit">Upload Image</button>
        </form>
      </div>
      { user || !footerMessage
        ? null
        : <div className="demo-footer">
            <p className="footer-text">
              You are not currently logged in and will not be able to post images.<br />Log in or sign up if you want to post images of your work!
            </p>
            <button onClick={() => history.push("/login")} className="footer-button">login / signup</button>
            <p onClick={hideFooterText} className="footer-hide">ⓧ</p>
          </div>
      }
    </div>
  )
}

export default Post;