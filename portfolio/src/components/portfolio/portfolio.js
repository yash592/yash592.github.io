//

import React from "react";
import "./portfolio.css";

const Portfolio = () => (

<div class="projects-horizontal" id="port">
        <div class="skillcontainer">
            <div class="intro">
                <h1 class="text-center">Portfolio</h1>
                <p class="text-center">Full stack and front end applications</p>
            </div>
            <div class="row projects">
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="https://portflowio.herokuapp.com/" target="_blank"><img class="img-fluid" src="https://i.imgur.com/W9bS669.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Portflow.io</h3>
                            <p class="description">Portfolio Full Stack application built for artists and developers to showcase their work.</p>
                            <p>Username: test Password: test</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="http://macromeals.herokuapp.com" target="_blank"><img class="img-fluid" src="https://i.imgur.com/zZHrcrf.png" /></a></div>
                        <div class="col">
                            <h3 class="name">MacroMeals</h3>
                            <p class="description">MacroMeals is a full stack application for health concsious consumers to get nutrition recommendations based on their goals.</p>
                            <p>Username: test Password: test</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="https://yash592.github.io/Meetipedia-v2/" target="_blank"><img class="img-fluid" src="https://i.imgur.com/5vYDOtD.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Meetipedia</h3>
                            <p class="description">Meetipedia is a front end application utilizing APIs like Eventbrite, Google places and Parkwhiz for a better meetup experience</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#" target="_blank"><img class="img-fluid" src="https://i.imgur.com/Q3JrDqN.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Bulletin.io</h3>
                            <p class="description">Full Stack application built in React to display top stories</p>
                            <p class="description">Utilizes the text summarization API for quick on the go gists of articles</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#" target="_blank"><img class="img-fluid" src="https://i.imgur.com/sLkPvHR.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Broccoli</h3>
                            <p class="description">Full Stack application built in React to display top stories</p>
                            <p class="description">Full Stack application built in React to display top stories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );

  export default Portfolio;
