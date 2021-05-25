import './css/Demo.css';
import Header from '../components/Header.js'
import Links from '../components/Links.js';
import React, { useEffect } from 'react';
import demoSet from '../assets/demo-urls.js'

const Demo = () => {
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
    footer.classList.toggle("demo-footer__hidden");
    // setTimeout(() => {footer.style.display = "none"}, 1000)
  }

  return (
    <div>
      <Header />
      <div className="demo-wrapper">
        <div className="test">
          <img className="demo-img"/>
        </div>
        <br />
        <button className="demo-form__submit" type="submit" onClick={next}>Skip</button>
        <button className="demo-form__submit" type="submit" onClick={next}>Like</button>
      </div>
      <div className="demo-footer">
        <p className="footer-text">
          * You are not currently logged in. You are free to explore but you're likes will not be saved and you will not be able to connect with or message artists.
        </p>
        <button onClick={hideFooterText} className="footer-button">got it</button>
      </div>
      <Links />
    </div>
  )
}

export default Demo;