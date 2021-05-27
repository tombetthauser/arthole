import './css/Links.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/session";



function Links() {
  const location = useLocation().pathname;
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "/demo") {
      const links = document.querySelectorAll(".intro-text__link");
      links.forEach(link => { link.style.fontSize = "18px" });
    }
  })

  const onLogout = async () => {
    await dispatch(logout());
  }

  return (
    <div className="intro-text">
      <ul className="intro-text__links">
        { user &&  
            <>
              <li><Link className="intro-text__link" to={`user/${user.id}`}>&gt; {user.username}</Link></li>
              <li><a className="intro-text__link" onClick={onLogout}>&gt; logout</a></li>
              <li><a className="intro-text__link" onClick={onLogout}>&gt; post</a></li>
            </>
        }
        { location !== "/" &&  
            <li><Link to={`/`} className="intro-text__link">&gt; home</Link></li>
        }
        { location === "/login" && !user && 
            <li><Link to={`/login`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; login</Link></li>
        }
        {location !== "/login" && !user &&
            <li><Link to={`/login`} className="intro-text__link">&gt; login</Link></li>
        }
        { location === "/signup" && !user && 
            <li><Link to={`/signup`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; signup</Link></li>
        }
        {location !== "/signup" && !user &&
            <li><Link to={`/signup`} className="intro-text__link">&gt; signup</Link></li>
        }
        <li>
          {
            location === "/demo"
              ? <Link to={`/demo`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>&gt; arthole</Link>
              : <Link to={`/demo`} className="intro-text__link">&gt; arthole</Link>
          }
        </li>
      </ul>
    </div>
  );
}

export default Links;
