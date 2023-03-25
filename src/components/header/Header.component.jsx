import { useEffect, useState } from 'react';
import HeaderLinks from '../header-links/HeaderLinks.component';
import LogoWrapper from '../logo-wrapper/LogoWrapper.component';

import './Header.styles.scss';

const Header = function () {
  // Set window width and depending on it show or hide header links
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change header padding top and bottom on page scroll
  const [headerPaddingTop, setHeaderPaddingTop] = useState(0);

  // Dynamically find and set padding. Added event listener
  useEffect(() => {
    const header = document.querySelector('header');
    const currentPadding = header && parseInt(getComputedStyle(header).padding);
    const paddingDecreaseRatio = 0.5;
    console.log(currentPadding);
    setHeaderPaddingTop(currentPadding);

    function handleScroll() {
      const scrollPosition = window.pageYOffset;
      const newPadding =
        scrollPosition > 0
          ? paddingDecreaseRatio * currentPadding
          : headerPaddingTop;

      setHeaderPaddingTop(newPadding);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <header
      // On first render, when headerPaddingTop=0, don't use this value, use value from css
      style={
        headerPaddingTop
          ? {
              paddingTop: `${headerPaddingTop}px`,
              paddingBottom: `${headerPaddingTop}px`,
            }
          : null
      }
      className={`${isMenuOpen ? 'open' : ''}`}
    >
      <div className="header-content-wrapper">
        <LogoWrapper />
        {windowWidth > 767 ? (
          <HeaderLinks />
        ) : (
          <>
            <button
              onClick={toggleMenu}
              className="toggle-btn"
            >
              <span></span>
            </button>
            {isMenuOpen && <HeaderLinks />}
          </>
        )}{' '}
      </div>
    </header>
  );
};

export default Header;

// return (
//   <>
//     {windowWidth > 600 ? (
//       <Menu />
//     ) : (
//       <>
//         <button onClick={toggleMenu}>
//           {isMenuOpen ? 'Close menu' : 'Open menu'}
//         </button>
//         {isMenuOpen && <Menu />}
//       </>
//     )}
//   </>
// );

// const isMobile = useMediaQuery('(max-width: 600px)');
// const [isMenuOpen, setIsMenuOpen] = useState(false);

// function toggleMenu() {
//   setIsMenuOpen(!isMenuOpen);
// }

// return (
//   <>
//     {!isMobile && <Menu />}
//     {isMobile && (
//       <>
//         <button onClick={toggleMenu}>
//           {isMenuOpen ? 'Close menu' : 'Open menu'}
//         </button>
//         {isMenuOpen && <Menu />}
//       </>
//     )}
//   </>
// );
// }
