import './css/Demo.css';
import Header from '../components/Header.js'
import Links from '../components/Links.js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import demoSet from '../assets/demo-urls.js'
import { useHistory } from "react-router-dom";

const Demo = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [footerMessage, setFooterMessage] = useState(true);
  let imageIdx = Math.floor(Math.random() * demoSet.length);

  const images = [];
  let img = null;
  let imgWrapper = null;

  const next = () => {
    img.style.opacity = 0;

    setTimeout(() => {
      imageIdx = (imageIdx + 3) % demoSet.length;
      img.src = demoSet[imageIdx];
      document.querySelector(".test").style.height = `${img.height}px`
    }, 750);

    setTimeout(() => { img.style.opacity = 1 }, 1150);
  }
  
  useEffect(() => {    // Update the document title using the browser API
    img = document.querySelector(".demo-img");
    imgWrapper = document.querySelector(".test");
    
    const newImg = new Image();
    newImg.src = demoSet[imageIdx];
    images.push(newImg);

    demoSet.forEach(url => {
      const newImg = new Image();
      newImg.src = url;
      images.push(newImg);
    })

    img.style.opacity = 0;

    setTimeout(() => {
      console.log(img.height)
      img.src = demoSet[imageIdx];
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 1250);
    
    setTimeout(() => { 
      console.log(img.height)
      img.style.opacity = 1 
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 1750);
  
    setTimeout(() => { 
      console.log(img.height)
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 2250);
  });

  const hideFooterText = () => {
    const footer = document.querySelector(".demo-footer");
    footer.style.opacity = 0;
    // setFooterMessage(false);
    setTimeout(() => { footer.classList.add("demo-footer__hidden") }, 500)
  }

  return (
    <div>
      <Header />
      <div className="demo-wrapper">
        <div className="test current-image">
          <img className="demo-img"/>
        </div>
        <br />
        <button className="demo-form__submit" type="submit" onClick={next}>Skip</button>
        <button className="demo-form__submit" type="submit" onClick={next}>Like</button>
      </div>
        { user || !footerMessage
          ? null
          : <div className="demo-footer">
              <p className="footer-text">
                You are not currently logged in but feel free to explore!<br />If you want your likes to be saved or to be able to message artists you don't have to be an artist to sign up. It's quick and easy!
              </p>
              <button onClick={() => history.push("/login")} className="footer-button">login / signup</button>
              <p onClick={hideFooterText} className="footer-hide">ⓧ</p>
            </div>
        }
      {/* <Links /> */}
    </div>
  )
}

export default Demo;