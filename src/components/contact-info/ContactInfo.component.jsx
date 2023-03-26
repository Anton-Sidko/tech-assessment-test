import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import locationIcon from '../../assets/location.svg';

import './ContactInfo.styles.scss';

const ContactInfo = function () {
  return (
    <ul className="contact-info">
      <li>
        <a
          href="tel:+10123456789"
          className="contact-link"
        >
          <i>
            <img
              src={phoneIcon}
              alt="icon"
            />
          </i>
          <span>+1012 3456 789</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:demo@gmail.com"
          className="contact-link"
        >
          <i>
            <img
              src={emailIcon}
              alt="icon"
            />
          </i>
          <span>demo@gmail.com</span>
        </a>
      </li>
      <li>
        <a
          href="http://maps.google.com/?q=132+Dartmouth+Street+Boston+Massachusetts+02156+United+States"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <img
              src={locationIcon}
              alt="icon"
            />
          </i>
          <span>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
