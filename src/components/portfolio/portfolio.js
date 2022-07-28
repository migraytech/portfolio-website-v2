/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';


import './portfolio.css';
import placeholder from '../../images/placeholder1.bmp';

const Portfolio = ()  => {

    return (
    <section id="portfolio">
        <div class="container mt-3">
            <h1 class="text-center">Portfolio</h1>
            <div class="row">


             <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Youtube</h4>
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
                            <h4 class="card-title">Quiz App</h4>
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
                            <h4 class="card-title">Product Landing Page</h4>
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
                            <h4 class="card-title">Messaging Service</h4>
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