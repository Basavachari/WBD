import React from 'react';
import { Element } from 'react-scroll'
import Navbar from './partials/navbar'
import "./App.css";
export default function Home() {
  return (
    
    <>
    <Navbar/>
    <div className="container-fluid" id="home-section">
      <div className="row landing-text-container">
        <div className="perfect col-12 col-sm-9 col-lg-6 shadow-lg px-3">
          <p>A perfect freelance services place for your business!</p>
        </div>
      </div>
    </div>
    <Element id="how-it-works-section">
        <div className="container-fluid how-it-works-container">
          <h3 className="circle-section text-center">Get It Done with Gratis Agency</h3>
          <div className="row how-it-works-content-container">
            <div className="col-md-3 icons">
              <img
                className="icon_rep img-fluid"
                src="/images/Post Image.svg"
                alt="" /><br />
              <h4>Post a Job</h4>
              <p>
                Create your free job posting and start receiving Quotes within
                hours.
              </p>
            </div>
            <div className="col-md-3 icons">
              <img
                className="icon_rep img-fluid"
                src="/images/Resume Icon.svg"
                alt="" /><br />
              <h4>Bids Come to You</h4>
              <p>
                Create your free job posting and start receiving Quotes within
                hours.
              </p>
            </div>
            <div className="col-md-3 icons">
              <img
                className="icon_rep img-fluid"
                src="images/Profile Icon.svg"
                alt="" /><br />
              <h4>Review Profiles</h4>
              <p>
                Create your free job posting and start receiving Quotes within
                hours.
              </p>
            </div>
            <div className="col-md-3 icons">
              <img
                className="icon_rep img-fluid"
                src="images/Collaborate Icon.svg"
                alt="" /><br />
              <h4>Collaborate Easily</h4>
              <p>
                Create your free job posting and start receiving Quotes within
                hours.
              </p>
            </div>
          </div>
        </div>
      </Element>
      
    <Element  id="explore-section">
      <div className="container-fluid explore-container">
        <div className="h3 text-center explore-title">Explore the marketplace</div>
        <div className="row">

          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Graphics Icon.svg"
              className="img-fluid explore-images"
              alt=""
            />
            <p className="explore-description">Graphics & Design</p>
          </a>


          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Programming Icon.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Programming & Development</p>
          </a>


          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Video and Animation Icon.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Video and Motion Animation</p>
          </a>


          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Digital Marketing.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Digital Marketing</p>
          </a>


          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Music and Audio.svg"
              className="img-fluid explore-images"
              alt=""
            />
            <p className="explore-description">Music & Audio</p>
          </a>


          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Writing and Transaltion.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Writing and Translations</p>
          </a>

          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Business Icon.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Business</p>
          </a>
          
          <a className="col-6 col-lg-4 explore-catagories" href="/login">
            <img
              src="images/Lifestyle Icon.svg"
              alt=""
              className="img-fluid explore-images"
            />
            <p className="explore-description">Lifestyle</p>
          </a>
        </div>
      </div>
    </Element>

    <div className="acheivements-page-wrapper">
      <Element id="about-us-section" className="content">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="c-title">Achievements</h2>
            <hr />
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6 acheivements-page-inner-wrapper"
              
            >
              <div
                className="single"
                style={{backgroundImage:"linear-gradient(#40f5ff, #c97b7b)"}}
              >
                <div className="inner">
                  <h3 className="count counter">925</h3>
                  <p className="text">Happy Clients</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 acheivements-page-inner-wrapper"
            >
              <div
                className="single"
                style={{backgroundImage:"linear-gradient(#40f5ff, #fffeab)"}}
                
              >
                <div className="inner">
                  <h3 className="count counter">10,000</h3>
                  <p className="text">Jobs</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 acheivements-page-inner-wrapper"
            >
              <div
                className="single"
                style={{backgroundImage:"linear-gradient(#40f5ff, #bb6eff)"}}
                
              >
                <div className="inner">
                  <h3 className="count counter">20,000</h3>
                  <p className="text">People Registered</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 acheivements-page-inner-wrapper"
            >
              <div
                className="single"
                style={{backgroundImage:"linear-gradient(#40f5ff, #c2ff7d)"}}
                
              >
                <div className="inner">
                  <h3 className="count counter">200</h3>
                  <p className="text">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <section className="text-center gap">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          rerum consequuntur quidem, quas aliquid nulla? Fugit culpa aspernatur
          vel. Magnam enim quisquam debitis unde! Nihil qui repellendus iusto
          voluptates.
        </p>
        <br /><br />
        <a className="btn btn-danger" href="signUp">Get started</a>
      </section>
    </div>
    </>
  )
}
