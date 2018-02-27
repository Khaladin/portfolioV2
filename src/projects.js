import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return(
      <div class="section-projects">
        <div class="projects__heading">
            Some projects I am proud of
        </div>

        <div class="row">
          <div class="col-1-of-2-">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="projects__headings">
                  Tasks List
                </div>
                <img src={require('./pics/PostsPage.png')} alt="Tasks Agenda" class="projects__pictures" />
              </div>

              <div class="card__side card__side--back">
                <div class="card__cta">
                  <p class="card__cta--text">This is my Task agenda page created using React.js. I created it to
                    practice using JWT in my applications and allow user authenticatoin.
                    It uses several different libraries to achieve the authentication, page
                    routing, and protected pages through the use of Higher Order Components.
                    The server side was created using Node.js and is live hosted through Heroku.com.
                    It uses several different libraries such as Bcrypt to help with authenticatication
                    for the user. Also using basic CRUD operations for use in RESTful APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-2-">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="projects__headings">
                  Local Weather App
                </div>
                <img src={require('./pics/weatherApp.jpg')} alt="Weather App" class="projects__pictures" />
              </div>

              <div class="card__side card__side--back">
                <div class="card__cta">
                  <p class="card__cta--text">This is a Local weather application. I made this to
                    practice using APIs in my websites. It hits on an API to draw in weather data
                    after prompting the user for a zip code. The project used a lot of JavaScript
                    to manipulate and display the data properly, especially through the use of
                    Object Oriented Programing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-1-of-2-">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="projects__headings">
                  Random Quote Generator
                </div>
                <img src={require('./pics/quoteGenerator.jpg')} alt="Random Quote Generator" class="projects__pictures" />
              </div>

              <div class="card__side card__side--back">
                <div class="card__cta">
                  <p class="card__cta--text">The information about the project goes here</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-2-">
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
