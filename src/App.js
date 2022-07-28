import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/servicess/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import Vanta from './components/Vanta';
// import Vanta from './components/Vanta';

function App() {
  return (
    <div class="App">
      <Vanta/>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
