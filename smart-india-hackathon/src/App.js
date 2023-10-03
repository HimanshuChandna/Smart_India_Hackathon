import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import logo from './components/media/post-office logo.png';
// import  {NavBar}  from './components/Nav-Bar/NavBar';
import { LandingPage } from './components/LandingPage/LandingPage';
import {ShippingLogin}  from './components/Seller-Login/ShippingLogin'; 
// import LoginSignup from './components/login-signup/LoginSignup';

function App() {
  return (
    <>
    {/* // You need to tag your components here */}
    {/* <NavBar></NavBar>
    <LandingPage></LandingPage> */}
    {/* <ShippingLogin></ShippingLogin> */}
    <Router>
        {/* Navigation Bar for the Landing Page */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="logo" class="ps-logo"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">          
          <Link class="nav-link active" aria-current="page" to="/LandingPage">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/">Login/Signup</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ShippingLogin">Seller Login</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
 

<Routes>
      <Route exact path="/LandingPage" element={ <LandingPage/> }></Route>
      <Route exact path="/ShippingLogin" element={ <ShippingLogin/> }></Route>

</Routes>
</div>
</nav>
</Router>
    </>
  );
}

export default App;
