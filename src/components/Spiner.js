import React from 'react';
import '../css/spiner.css';

const Spiner = () => (
  <div className="spin-container">
    <div className="spin" id="loader" />
    <div className="spin" id="loader2" />
    <div className="spin" id="loader3" />
    <div className="spin" id="loader4" />
    <span id="text">LOADING...</span>
  </div>
);

export default Spiner;
