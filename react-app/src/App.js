import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./pages/Landing.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import Demo from "./pages/Demo.js"
import Post from "./pages/Post.js"
import User from "./pages/User.js"
import { authenticate } from "./store/session";
import './App.css';


function App() {
  // const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) return null;

  return (
    <div className="wrapper">
      {/* { user ? <p>welcome back {user.username}</p> : <p>you are not currently logged in</p> } */}
      <BrowserRouter basename="/arthole">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/demo" exact component={Demo} />
          <Route path="/post" exact component={Post} />
          <Route path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
