/* eslint-disable no-undef */

import './home.css';
import React from 'react';


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const main = document.querySelector('section')
      main.style.opacity = 1
      main.style.filter = 'blur(0px)'
    }, 1500)

});



const Home = ()  => {

  
    return (
    <div >  
        <section class="bgimage animated " id="home">
            <div class="container-fluid">
                <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                    <h2 class="hero_title">Hi, it's me Mignon Gakuba</h2>
                    <p class="hero_desc">I am a Junior Java Developer from Rotterdam</p>
                </div>
                </div>
            </div>
        </section>
    </div>

    );
};

export default Home;