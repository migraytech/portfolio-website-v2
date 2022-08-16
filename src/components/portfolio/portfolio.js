/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';


import './portfolio.css';
import placeholder from '../../images/placeholder1.bmp';
import placeholder2 from '../../images/placeholder2.bmp';
import placeholder3 from '../../images/placeholder3.bmp';



const Portfolio = ()  => {

    return (
<div class="container-fluid">
    <section id="portfolio" >
          <div class="container mt-3">
            <h1 class="text-center">Portfolio</h1>
            
            <div class="row">
                
             <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Discord-bot</h4>
                            <p class="card-text">Created discord mod bot for that moderates a discussion forum by removing unacceptable postings, etc..</p>
                            <div class="text-center">
                                <a href="https://github.com/MignonGakuba/discord-bot" class="btn btn-dark btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder2} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Reciswipe React Native App</h4>
                            <p class="card-text">For my individual assignment I would like to work on my own concept. I came up with a concept together with a friend that I would like to work on. Recswipe you will see that it looks and functions differently than Tinder. It can generate recipes. In addition, you can keep track of what you have eaten last.</p>
                            <div class="text-center">
                                <a href="https://github.com/MignonGakuba/reciswipe_OI" class=" btn btn-dark btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder3} alt="test" />

                        <div class="card-body">
                            <h4 class="card-title"> Youtube_Project</h4>
                            <p class="card-text">Created a youtube project with Angular and SpringBoot.</p>
                            <div class="text-center">
                                <a href="#" class=" btn btn-dark btn btn-success">Link</a>
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
                            <p class="card-text">Python course.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-dark btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder2} alt="test" />

                        <div class="card-body">
                            <h4 class="card-title">CodeWars Katas</h4>
                            <p class="card-text">Codewars-kyus-solutions This is a repository of mine codewars kyus solutions. I will seperate each level from 7yu to 1 kyu. My goal is to train my Software IQ to a next level and eventually become a better programmer.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-dark btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src={placeholder3} alt="test" />
                        <div class="card-body">
                            <h4 class="card-title">Blog App</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-dark btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>
    </section>
</div>
    )

}




export default Portfolio;