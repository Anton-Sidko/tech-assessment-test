import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import Main from './components/main/Main.component';

const App = function () {
  return (
    <div className="content-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

