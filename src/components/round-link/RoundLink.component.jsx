import { Link } from 'react-router-dom';
import './RoundLink.styles.scss';

const RoundLink = function ({
  path,
  imageSrc,
  altText,
  inverted,
  ...otherLinkProps
}) {
  return (
    <div className="round-link-wrapper">
      <Link
        to={path}
        className={`${inverted ? 'inverted' : ''} round-link`.trim()}
        {...otherLinkProps}
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
