import React from "react";

import { SocialIcon } from 'react-social-icons';

import "./social.css";

export default function socialMedia(props) {
  return (
    <div style={{paddingBottom: '25px'}}>
     <SocialIcon url="https://www.instagram.com/prateekadhikari.photography/" style={{margin: '0 5px'}} />
     <SocialIcon url="https://www.facebook.com/PrateekAdhikari.photography" style={{margin: '0 5px'}} />
     <SocialIcon url="mailto:hello@prateekadhikari.photography" style={{margin: '0 5px'}} />
     <SocialIcon url="https://www.youtube.com/channel/UCx7rjiL9tW-VNkXM85K6TSw" style={{margin: '0 5px'}} />
    </div>
  );
}
