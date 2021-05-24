import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "./components-old/auth/LoginForm";
// import SignUpForm from "./components-old/auth/SignUpForm";
// import NavBar from "./components-old/NavBar";
// import ProtectedRoute from "./components-old/auth/ProtectedRoute";
// import UsersList from "./components-old/UsersList";
// import User from "./components-old/User";

import Landing from "./components/Landing.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import Demo from "./pages/Demo.js"

import { authenticate } from "./store/session";

import './App.css';


function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <div className="wrapper">
      <BrowserRouter basename="/arthole">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </BrowserRouter>
    </div>
    // <BrowserRouter>
    //   <NavBar />
    //   <Switch>
    //     <Route path="/login" exact={true}>
    //       <LoginForm />
    //     </Route>
    //     <Route path="/sign-up" exact={true}>
    //       <SignUpForm />
    //     </Route>
    //     <ProtectedRoute path="/users" exact={true} >
    //       <UsersList/>
    //     </ProtectedRoute>
    //     <ProtectedRoute path="/users/:userId" exact={true} >
    //       <User />
    //     </ProtectedRoute>
    //     <ProtectedRoute path="/" exact={true} >
    //       <h1>My Home Page</h1>
    //     </ProtectedRoute>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
