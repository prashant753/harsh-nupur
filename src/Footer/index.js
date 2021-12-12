import React from "react";
import SocialMedia from "../Components/SocialMedia";

import './footer.css'

const description = "We provide the most fun and beautiful photography experience for your wedding day. For bookings call or whatsapp: 9915012233/9915012266 or email: hello@prateekadhikariphotography We are Wedding photographers who accept assignments from all over India. We are based out of Dehradun & Chandigarh and are the best in Candid Photography. Our services include: Wedding photography Pre-wedding photography Post-Wedding photography Engagement shoot Portfolio shoot We can be reached at 9915012233/66 and email: hello@prateekadhikari.photography. Don't want to call or email? you can also ping us on WhatsApp at 9915012233. Let's discuss how we can create stunning images for you..:)";

const title = "Prateek Adhikari Photography";


class Footer extends React.PureComponent {
  render() {
    return (
  <div style={{backgroundColor: '#121212'}}>
    <div style={{maxWidth: '1200px', margin: 'auto', color: 'white'}}>
      <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="title">{title}</h1>
          <div className="description">{description}</div>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + '09915012233'}>
              {'Whatspp/Call -> 09915012233'}
            </a>
            <br />
            <br />
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}

export default Footer
