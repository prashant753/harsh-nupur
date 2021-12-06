import React from "react";

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { IMAGES } from "../utils/imageUrls";


import './gallery.css';

class ImageGallery extends React.PureComponent {
  render() {
    return (
      <Zoom>
        <div className="gallery03Wrapper">
        {
          IMAGES.map((imageurl, index) => {
            return this.getImage(imageurl, index)
          })
        }
        </div>
      </Zoom>
    )
  }

  getImage = (imageurl, key) => {
    return (
    <Fade left>
      <img
        className="gallery03Image"
        key={key}
        src={imageurl}
        alg='Harsh_Nupur'
      />
    </Fade>
    )
  }
}

export default ImageGallery
