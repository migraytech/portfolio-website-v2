import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/servicess/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
// import Vanta from './components/Vanta';



window.addEventListener('DOMContentLoaded', () => {
  var loader = document.querySelector('.loader');
	setTimeout(() => {
    loader.style.opacity = 0
    loader.style.filter = 'blur(1px)'	
	}, 1950);

  var shadow = document.querySelector('.shadow');

  setTimeout(() => {
    shadow.style.opacity = 0
    shadow.style.filter = 'blur(1px)'	
	}, 1950);
});

function App() {
  return (
    <div class="App">
    <div class="loader"></div>
    <div class="shadow"></div>
      {/* <Vanta/> */}
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
