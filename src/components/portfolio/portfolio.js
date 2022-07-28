/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';


import './portfolio.css';
import placeholder from '../../images/placeholder1.bmp';
import placeholder2 from '../../images/placeholder2.bmp';
import placeholder3 from '../../images/placeholder3.bmp';



const Portfolio = ()  => {

    return (
    <section id="portfolio" >

          <div class="container mt-3">
            <h1 class="text-center">Portfolio</h1>
            <div class="row">


             <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Discord-bot</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="https://github.com/MignonGakuba/discord-bot" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder2} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Reciswipe React Native App</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="https://github.com/MignonGakuba/reciswipe_OI" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder3} alt="test" />

                        <div class="card-body">
                            <h4 class="card-title"> Youtube_Project</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />

                        <div class="card-body">
                            <h4 class="card-title">Python-tutorial </h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />

                        <div class="card-body">
                            <h4 class="card-title">Twitter Clone</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Blog App</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    )

}




export default Portfolio;