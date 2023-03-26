import { Route, Routes } from 'react-router-dom';
import FeaturesRoutes from '../../routes/features/FeaturesRoutes.component';

import Home from '../../routes/home/Home.component';
import Blog from '../../routes/blog/Blog.component';
import Shop from '../../routes/shop/Shop.component';
import About from '../../routes/about/About.component';
import Contact from '../../routes/contact/Contact.component';
import UserPage from '../../routes/user/UserPage.component';
import CartPage from '../../routes/cart/CartPage.component';
import NotFound from '../../routes/not-found/NotFound.component';
import { useEffect, useState } from 'react';

const Main = function () {
  // Dynamically find and set padding to main, when header fixed.
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get the height of the header element
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  return (
    <main
      style={{ paddingTop: `${headerHeight}px` }}
      className="content-wrapper"
    >
      {/* Use react-router-dom for site navigation */}
      <Routes>
        <Route
          path="/"
          index
          element={<Home />}
        />

        <Route
          path="features/*"
          element={<FeaturesRoutes />}
        />

        <Route
          path="blog/"
          element={<Blog />}
        />
        <Route
          path="shop/"
          element={<Shop />}
        />
        <Route
          path="about/"
          element={<About />}
        />
        <Route
          path="contact/"
          element={<Contact />}
        />
        <Route
          path="user-page/"
          element={<UserPage />}
        />
        <Route
          path="cart-page/"
          element={<CartPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
};

export default Main;
