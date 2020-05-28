import React from 'react';
import { Link } from 'react-router-dom';
import lamb from '../Asset/lamb.png';
import '../css/nav.css';

const NavBar = () => (
  <div className="nav">
    <Link className="home-link" to="/">
      <img className="logo-img" src={lamb} alt="logo" />
      <h4 className="g-text"> Recipmatic</h4>
    </Link>
  </div>
);

export default NavBar;
