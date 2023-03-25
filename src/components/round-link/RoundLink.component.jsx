import { Link } from 'react-router-dom';
import './RoundLink.styles.scss';

const RoundLink = function ({ path, imageSrc, altText, inverted }) {
  return (
    <div className="round-link-wrapper">
      <Link
        to={path}
        className={`${inverted ? 'inverter' : ''} round-link`.trim()}
      >
        <img
          src={imageSrc}
          alt={altText}
        />
      </Link>
    </div>
  );
};

export default RoundLink;
