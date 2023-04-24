import React from "react";
import {Link} from "react-router-dom"
import "./welcome.css"
import axios from "axios";
import { useEffect } from "react";
const Welcome = () => {
  const [data, setData] = React.useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = axios.get("http://localhost:5000/api/auth/",{
      headers: {'x-auth-token': token}
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data)
        return res.data;
      })
  }, [])
  console.log(data);
  return (
    <>
      <div className="welcome-card" >
      <div className="card-body">
          <h5 className="card-title " >Hi {data && data.username}</h5>
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
