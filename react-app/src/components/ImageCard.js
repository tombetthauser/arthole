import Links from '../components/Links.js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import demoSet from '../assets/demo-urls.js'
import { useHistory } from "react-router-dom";
import './css/ImageCard.css'

const ImageCard = () => {
  // const history = useHistory();
  // const user = useSelector(state => state.session.user);
  // const [footerMessage, setFooterMessage] = useState(true);
  let imageIdx = Math.floor(Math.random() * demoSet.length);

  // const images = [];
  // let img = null;
  // let imgWrapper = null;

  useEffect(() => {    // Update the document title using the browser API
    // img = document.querySelector(".demo-img");
    // imgWrapper = document.querySelector(".test");

    // const newImg = new Image();
  });

  return (
    <div>
      <img src={demoSet[imageIdx]} className="imagecard-img" />
      <p className="imagecard-text">
        <span className="imagecard-text-like">
          {Math.random() > .5 ? "•" : "◦"}
        </span>&nbsp;
        Untitled, {Math.floor(Math.random() * 100)} x {Math.floor(Math.random() * 100)} in. mixed media, 20{Math.floor(Math.random() * 10) + 10}
      </p>
    </div>
  )
}

export default ImageCard;