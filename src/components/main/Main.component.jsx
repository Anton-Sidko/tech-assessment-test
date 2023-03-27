import { Route, Routes } from 'react-router-dom';
import FeaturesRoutes from '../../routes/features/FeaturesRoutes.component';

import HomePage from '../../routes/home/HomePage.component';
import BlogPage from '../../routes/blog/BlogPage.component';
import ShopPage from '../../routes/shop/ShopPage.component';
import AboutPage from '../../routes/about/AboutPage.component';
import ContactPage from '../../routes/contact/ContactPage.component';
import UserPage from '../../routes/user/UserPage.component';
import CartPage from '../../routes/cart/CartPage.component';
import NotFoundPage from '../../routes/not-found/NotFoundPage.component';
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
    <main style={{ paddingTop: `${headerHeight}px` }}>
      <div className="content-wrapper">
        {/* Use react-router-dom for site navigation */}
        <Routes>
          <Route
            path="/"
            index
            element={<HomePage />}
          />

          <Route
            path="features/*"
            element={<FeaturesRoutes />}
          />

          <Route
            path="blog/"
            element={<BlogPage />}
          />
          <Route
            path="shop/"
            element={<ShopPage />}
          />
          <Route
            path="about/"
            element={<AboutPage />}
          />
          <Route
            path="contact/"
            element={<ContactPage />}
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
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
