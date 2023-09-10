import React from "react";

function Work() {
  return (
    <div>
      <div className='row below-header'>
        <div className='col'>
          <p className='display-1 text-center'>My Work</p>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6'>
          <img src="/my-work.png" width="80%"></img>
        </div>
        <div className='col-sm-6 text-center'>
          <p className='display-3'>Tech Blog</p>
          <p className='display-6'>
            I created a blog website that hosts discussions of the most popular coding languages. After learning, ORM and 
            MVC, I decided to create an application with both a front-end and back-end. Front-end is being utilized by 
            handlebars. Back-end contains a mysql database
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <a 
              href="https://thawing-waters-17395-8bc0d1226b10.herokuapp.com/" 
              className="btn btn-primary">
              Go to Website
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://github.com/javieb5186/tech-blog" className="btn btn-primary">Go to Repository</a>
            </div>
          </div>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6 text-center'>
          <p className='display-1'>Ghost Writer</p>
          <p className='display-6'>
            A group project where we choose an author dead or alive, and have them tells us modern news in their way. 
            Work was divided equally, where each member tackled both front-end and back-end. Technologies used were: 
            Sequelize, Mysql, ChatGPT, Bulma, and Newsapi. 
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <a href="https://stormy-plains-32549-a1bc163e95b5.herokuapp.com/" 
              className="btn btn-primary">
              Go to Website
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://github.com/javieb5186/ghostwriter" className="btn btn-primary">Go to Repository</a>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <img src="/ghostwriter.png" width="80%"></img>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6'>
          <img src="/pupperpicker.png" width="80%"></img>
        </div>
        <div className='col-sm-6 text-center'>
          <p className='display-1'>Pupper Picker</p>
          <p className='display-6'>
            A group project where you can discover dogs for adoption. Being the first project into the web development 
            world, there is only a beautiful front-end with API calls. Work was divided mostly by html pages required. 
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <a href="https://fourstringfunk.github.io/dog-website/" className="btn btn-primary">Go to Website</a>
            </div>
            <div className="col-sm-4">
              <a href="https://github.com/FourStringFunk/dog-website" className="btn btn-primary">Go to Repository</a>
            </div>
          </div>
        </div>
      </div>
      <div className='sec row d-flex align-items-center justify-content-around'>
        <div className='col-sm-3'>
          <div className="card text-center" width='100%'>
            <img className="card-img-top" src="/pokemon-quiz.png" alt="Card image"></img>
            <div className="card-body">
              <h4 className="card-title">Pokemon Quiz</h4>
              <p className="card-text">My first fun project. During class we had free reign to create any type of quiz we 
              wanted. I decided to create a pokemon quiz because my first initial though when I heard 'quiz', I thought the 
              the pokemon quiz when I was younger</p>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <a href="https://javieb5186.github.io/pokemon-quiz/" className="btn btn-primary">Website</a>
                </div>
                <div className="col-sm-4">
                  <a href="https://github.com/javieb5186/pokemon-quiz" className="btn btn-primary">Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-center" width='100%'>
            <img className="card-img-top" src="/portfolio.png" alt="Card image"></img>
            <div className="card-body">
              <h4 className="card-title">First Portfolio</h4>
              <p className="card-text">My first simple portfolio. Although we were tasked with no high expectations for 
              making our own portfolio, I wanted to go above and beyond for my portfolio. Using grids and columns is how 
              I created the layout for my page.</p>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <a href="https://javieb5186.github.io/my-frontend-portfolio/" className="btn btn-primary">Website</a>
                </div>
                <div className="col-sm-4">
                  <a href="https://github.com/javieb5186/my-frontend-portfolio" className="btn btn-primary">Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-center" width='100%'>
            <img className="card-img-top" src="/weather-dashboard.png" alt="Card image"></img>
            <div className="card-body">
              <h4 className="card-title">Weather Dashboard</h4>
              <p className="card-text">I was given the task of creating a weather application with a given API and Photo of the 
              design. I then created exactly what was given to me in the photo. Not only did I create the exact photo, but the 
              same functionality they wanted.</p>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <a href="https://javieb5186.github.io/weather-dashboard/" className="btn btn-primary">Website</a>
                </div>
                <div className="col-sm-4">
                  <a href="https://github.com/javieb5186/weather-dashboard" className="btn btn-primary">Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;