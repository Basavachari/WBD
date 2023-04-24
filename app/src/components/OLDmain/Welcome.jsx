import React from "react";
import {Link} from "react-router-dom"
import "./welcome.css"
const Welcome = () => {
  const username=localStorage.getItem('username');
  return (
    <>
      <div className="welcome-card" >
      <div className="card-body">
          <h5 className="card-title " >Hi {username},</h5>
          <p className="card-text ">Get offers from sellers</p>
          <p className="card-text">for your project</p>
          <div className="btn " style={{fontFamily:'sans-serif'}}>
          <Link to="/addJob">Post a Job</Link>

          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
