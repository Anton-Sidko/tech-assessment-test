import { Route, Routes } from 'react-router-dom';
import Feature1 from './features-inner/Feature1.component';
import Feature2 from './features-inner/Feature2.component';
import Feature3 from './features-inner/Feature3.component';

const Features = function () {
  return (
    <Routes>
      <Route
        path="features-1"
        element={<Feature1 />}
      />
      <Route
        path="features-2"
        element={<Feature2 />}
      />
      <Route
        path="features-3"
        element={<Feature3 />}
      />
    </Routes>
  );
};

export default Features;
