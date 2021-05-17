import '../../assets/scss/main.scss';
import Header from '../containers/Header';
import Hero from '../containers/Hero';
import Products from '../containers/Products';
import About from '../containers/About';
import Gallery from '../containers/Gallery';
import Services from '../containers/Services';
import Footer from '../containers/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <Products></Products>
      <About></About>
      <Gallery></Gallery>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
