import ContactInfo from '../contact-info/ContactInfo.component';
import LinkList from '../link-list/LinkList.component';
import LogoWrapper from '../logo-wrapper/LogoWrapper.component';
import SubscribeFormWrapper from '../subscribe-form/SubscribeFormWrapper.component';
import './Footer.styles.scss';

const Footer = function () {
  return (
    <footer>
      <div className="content-wrapper footer-content-wrapper">
        <LogoWrapper />

        <div className="footer-info">
          <div className="footer-info-block contact-block">
            <h4 className="info-block-title">Reach us</h4>
            <ContactInfo />
          </div>

          <div className="footer-info-block">
            <h4 className="info-block-title">Company</h4>
            <LinkList
              list={[
                { path: '/about', title: 'About' },
                { path: '/contact', title: 'Contact' },
                { path: '/blog', title: 'Blogs' },
              ]}
            />
          </div>

          <div className="footer-info-block">
            <h4 className="info-block-title">Legal</h4>
            <LinkList
              list={[
                { path: '/privacy-policy', title: 'Privacy Policy' },
                { path: '/terms-services', title: 'Terms & Services' },
                { path: '/terms-of-use', title: 'Terms of Use' },
                { path: '/refund-policy', title: 'Refund Policy' },
              ]}
            />
          </div>

          <div className="footer-info-block">
            <h4 className="info-block-title">Quick Links</h4>
            <LinkList
              list={[
                { path: '/techlabz-keybox', title: 'Techlabz Keybox' },
                { path: '/downloads', title: 'Downloads' },
                { path: '/forum', title: 'Forum' },
              ]}
            />
          </div>

          <div className="footer-info-block subscribe-block">
            <SubscribeFormWrapper />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
