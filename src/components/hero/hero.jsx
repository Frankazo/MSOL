import React from 'react';
import heroImg from '../../assets/images/hero_bg.png';



function hero() {
  return (
    <div className="hero">
        <div className="hero-wrapper">
            <img className="heroImg" src={heroImg} alt="hero Image"/>
        </div>
    </div>
  )
}

export default hero;
