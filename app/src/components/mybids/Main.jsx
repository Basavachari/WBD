import React from "react";
import "./Main.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Main = (props)=> {
  const [show, setShow] = React.useState(false);
  return(
    

      <><div className="acc">
      <div className="acc-title">{props.jobName}</div>
      <div className="cover-buttons">
        {/* {props.bidPriceHistory.map((btn, index) => {
          return (
            <div className="buttons" style={{ "#0BAF6A" : "black" }}>{btn}</div>
          );
        })} */}
        <div className="buttons" style={{ "#0BAF6A" : "black" }}>Rs.{props.bidPrice}</div>

      </div>
      <div className="acc-icon">
        <p onClick={()=> setShow(!show)}>
          {show ? <FaArrowUp />  : <FaArrowDown />}
        </p>
      </div>
    </div><div className="noone">

          {show && (
            <div className="acc-body">
              <div className="comp2">
                <div className="left2">
                  <div className="top2">
                    <h3>Job Description</h3>
                    <p>
                      {props.jobDesc}
                    </p>
                  </div>
                  <div className="bottom2">
                    <h3>My Bid Description</h3>
                    <p>
                      {props.bidDesc}
                    </p>
                  </div>
                </div>
                <div className="right2">
                  <h3>Bid Price</h3>
                  <li>&gt; &nbsp;Rs.{props.bidPrice}</li>
                  {/* <ul>
                    {props.bidPriceHistory.map((item) => {
                      return (
                        <li>&gt; &nbsp;{item}</li>
                      )
                    })}
                  </ul> */}
                          
                          
                </div>
              </div>
            </div>
          )}
          

      </div></>

  );

 }
export default Main;
