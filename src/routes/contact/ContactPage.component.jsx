import ContactUs from '../../components/contact-us/ContactUs.component';
import './ContactPage.styles.scss';

const ContactPage = function () {
  return (
    <>
      <h1 className="page-title">Contact Us</h1>
      <div className="page-subtitle">
        Any question or remarks? Just write us a message!
      </div>

      <ContactUs />
    </>
  );
};

export default ContactPage;
