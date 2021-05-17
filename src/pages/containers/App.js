import '../../assets/scss/main.scss';
import Header from '../containers/Header';
import Hero from '../containers/Hero';
import Products from '../containers/Products';
import About from '../containers/About';
import Gallery from '../containers/Gallery';

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <Products></Products>
      <About></About>
      <Gallery></Gallery>
    </>
  );
}

export default App;
