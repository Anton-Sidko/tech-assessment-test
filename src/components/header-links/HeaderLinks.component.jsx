import Navigation from '../../routes/navigation/Navigation.component';
import RoundLink from '../round-link/RoundLink.component';
import userIcon from '../../assets/user.svg';
import cartIcon from '../../assets/cart.svg';

const HeaderLinks = function () {
  return (
    <div className="header-links-wrapper">
      <Navigation />

      <div className="add-link-wrap">
        {/* In this place we use separate component for round link, because we have same component in another place */}
        <RoundLink
          path={'user-page'}
          imageSrc={userIcon}
          altText="user icon"
        />
        <RoundLink
          path={'cart-page'}
          imageSrc={cartIcon}
          altText="cart icon"
        />
      </div>
    </div>
  );
};

export default HeaderLinks;
