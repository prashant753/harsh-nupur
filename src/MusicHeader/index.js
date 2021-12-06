import React from "react";
import ReactAudioPlayer from 'react-audio-player';

import MusicFile from './music.mp3'

import './music.css';

class MusicHeader extends React.PureComponent {
  render() {
    return (
      <div className="music02Wrapper">
        <ReactAudioPlayer
          src={MusicFile}
          autoPlay
          controls
          className="music02Player"
        />
      </div>
    )
  }
}

export default MusicHeader
