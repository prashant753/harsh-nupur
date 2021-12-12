/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import { IMAGES } from "../utils/imageUrls";
import { isMobileDeviceCheck } from "../utils/helper";

import './gallery.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'unset'
  },
};

const carouselImages = IMAGES.map((src,number) => ({
  src: src,
}));

class ImageGallery extends React.PureComponent {

  state ={
    isOpen: false,
    selectedIndex: 0
  }

  render() {

  const { isOpen, selectedIndex } = this.state

    return (
      <>
      <Zoom>
        <div className="gallery03Wrapper">
        {
          IMAGES.map((imageurl, index) => {
            return this.getImage(imageurl, index)
          })
        }
        </div>
      </Zoom>
      <Modal
        isOpen={isOpen}
        onRequestClose={this.toogleModal}
        style={customStyles}
      >
        <div className='carousel-container'>
         <Carousel 
          images={carouselImages}
          style={{ height: 500, width: 370}}
          index={selectedIndex}
          hasMediaButton={false}
         />
        </div>
      </Modal>
      </>
    )
  }

  getImage = (imageurl, key) => {

    const onImageClick = () => this.toogleModal(key)
    return (
    <Fade left>
      <img
        className="gallery03Image"
        key={key}
        src={imageurl}
        alg="altImg"
        onClick={onImageClick}
      />
    </Fade>
    )
  }

  toogleModal = (key) => {

    if(!isMobileDeviceCheck()) {
      return
    }

    this.setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      selectedIndex: key
    }))
  }
}

// https://www.npmjs.com/package/react-simply-carousel#demo

export default ImageGallery
