import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const skills = props.card.skills.split(',');
  const job_id = props.card._id;

  return (
    <div className="block">
      {/* <Link to="/jobdetails" params = {{job_id}}> */}
      <Link to={`/jobdetails/${job_id}`}>
        <h4>{props.card.jobName}</h4>
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-6">Category: {props.card.category}</div>
          <div className="col-6">
            Experience Level : {props.card.experience}
          </div>
        </div>
        <p> {props.card.description} </p>
        <div className="skillsRequired">
          {props.card.skills.map((skill) => {
            return <button href="">{skill}</button>;
          })}
        </div>
      </div>
    </div>
  );
}