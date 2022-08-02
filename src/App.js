import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/servicess/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import NavBar from './navbar/navbar';
import Footer from './components/footer/footer';
// import Vanta from './components/Vanta';



///TODO

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
	setTimeout(() => {
    loader.style.display = 'none';
	}, 1950);

  const shadow = document.querySelector('.shadow');

  setTimeout(() => {
    shadow.style.display = 'none';
	}, 1950);


  const navbar = document.querySelector('.navbar');
  navbar.style.display = 'none';

  setTimeout(() => {
    navbar.style.display = 'inline';
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
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
