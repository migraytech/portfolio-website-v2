/* eslint-disable jsx-a11y/anchor-is-valid */
import  './navbar.css'
import React , { useState} from 'react';
import {Link} from "react-scroll";



const NavBar  = () =>{

const [navbar, setNavBar] = useState(false);

const changeBackground = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 80){
       setNavBar(true);
    }
    else {
        setNavBar(false);
    }
}

window.addEventListener('scroll',changeBackground);

return (
<div  class="container-fluid">
    <nav  className={navbar ? 'navbar navbar-dark bg-dark navbar-expand-lg fixed-top navbarScrol' : 'navbar navbar-expand-lg fixed-top navbarScroll"'} >
        <div class="container">
            <a class="navbar-brand" href="#">MG</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        </Link>
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        </Link>
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        </Link>
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        </Link>
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        </Link>
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</div>
    
    );
}

export default NavBar