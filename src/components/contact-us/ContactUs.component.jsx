import ContactInfo from '../contact-info/ContactInfo.component';
import RoundLink from '../round-link/RoundLink.component';

import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import discordIcon from '../../assets/discord.svg';

import './ContactUs.styles.scss';
import ContactForm from '../contact-form/ContactForm.component';

const ContactUs = function () {
  return (
    <div className="contact-us-wrapper">
      <div
        className="contact-info-wrapper"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-figure.png'})`,
        }}
      >
        <h3>Contact Information</h3>
        <div className="subtitle">Say something to start a live chat!</div>

        <ContactInfo />

        <div className="social-links-wrapper">
          <RoundLink
            path="https://twitter.com/"
            imageSrc={twitterIcon}
            altText="twitter icon"
            inverted
            target="_blank"
            rel="noopener noreferrer"
          />
          <RoundLink
            path="https://instagram.com/"
            imageSrc={instagramIcon}
            altText="instagram icon"
            inverted
            target="_blank"
            rel="noopener noreferrer"
          />
          <RoundLink
            path="https://discord.com/"
            imageSrc={discordIcon}
            altText="discord icon"
            inverted
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;
