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
    // setFooterMessage(false);
    setTimeout(() => { footer.classList.add("demo-footer__hidden") }, 500)
  }

  return (
    <div>
      <Header />
      <div className="login-wrapper">
        <h2 className="login-h2">New Image Upload</h2>
        <p className="signup-text">Anyone can sign up for Arthole, whether you're an artist, a gallerist, a collector or just a fan. You don't have to sign up to look at art or artists on the platform, but once you do you'll be able to connect with artists you like and message them when you've found a match.</p>
        {/* <p>
          <br /><br />
          Additionally if you're an artist you'll be able to upload your work to our internal feed and apply to have your work featured on the public-facing version of arthole. 
          <br /><br />
          In any case welcome and happy arting!
        </p> */}
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
          <button className="login-form__submit" type="submit">Upload Image</button>
        </form>
      </div>
      {/* { user || !footerMessage
        ? null
        : <div className="demo-footer">
            <p className="footer-text">
              You are not currently logged in but feel free to explore!<br />If you want to upload a new image to ArtHole it's quick and easy to sign up!
            </p>
            <button onClick={() => history.push("/login")} className="footer-button">login / signup</button>
            <p onClick={hideFooterText} className="footer-hide">ⓧ</p>
          </div>
      } */}
    </div>
  )
}

export default Post;