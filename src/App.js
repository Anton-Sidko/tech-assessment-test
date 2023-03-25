import { Route, Routes } from 'react-router-dom';
import FeaturesRoutes from './routes/features/FeaturesRoutes.component';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';

const App = function () {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path="features/*"
          element={<FeaturesRoutes />}
        />
      </Route>
    </Routes>
  );
};

export default App;

