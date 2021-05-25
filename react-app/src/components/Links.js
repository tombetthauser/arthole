import './css/Links.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import LogoutButton from './auth/LogoutButton';



function Links() {
  const location = useLocation().pathname;
  console.log(location)

  useEffect(() => {
    if (location === "/demo") {
      const links = document.querySelectorAll(".intro-text__link");
      links.forEach(link => { link.style.fontSize = "18px" });
    }
  })

  return (
    <div className="intro-text">
      <ul className="intro-text__links">
        <li>
          {
            location === "/login"
              ? <Link to={`/login`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; login</Link>
              : <Link to={`/login`} className="intro-text__link">&gt; login</Link>
          }
        </li>
        <li>
          {
            location === "/signup"
              ? <Link to={`/signup`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; signup</Link>
              : <Link to={`/signup`} className="intro-text__link">&gt; signup</Link>
          }
        </li>
        {/* {
          location === "/" 
            ? null 
            : <li><Link to={`/`} className="intro-text__link">back</Link></li>
        } */}
        <li>
          {
            location === "/demo"
              ? <Link to={`/demo`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; art</Link>
              : <Link to={`/demo`} className="intro-text__link">&gt; art</Link>
          }
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default Links;
