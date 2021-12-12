import React from "react";

import Fade from 'react-reveal/Fade';

import './hero.css';

class HeroSectionHeader extends React.PureComponent {
  render() {
    return (
      <div className="hero01Wrapper">
        <Fade>
        <img 
          className="hero01Image"
          src="https://ik.imagekit.io/rwzlejnphpv/Photos/Harsh_Nupur_69__kfg6KJon.jpg?updatedAt=1638802953731"
          alt="Hero banner"
         />
        </Fade>
         <div className="hero01ImageText">Harsh & Nupur</div>
      </div>
    )
  }
}

export default HeroSectionHeader
