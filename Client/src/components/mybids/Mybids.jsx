import React, { useState } from "react";
import axios from "axios";
import "./Mybids.css";
import { useEffect } from "react";
import data from "./data";
import Main from "./Main";
function getUserBids(userid) {
  let userBids = [];

  for (let i = 0; i < data.length; i++) {
    let job = data[i];

    for (let j = 0; j < job.bids.length; j++) {
      let bid = job.bids[j];

      if (bid.userid === userid) {
        userBids.push({
          jobName: job.name,
          jobDesc: job.desc,
          bidDesc: bid.desc,
          bidPriceHistory: job.bids.filter(bid => bid.userid === userid).map(bid => bid.price).sort((a, b) => b - a)
        });
      }
    }
  }

  return userBids;
}
let bidsdata = getUserBids(1);

let uniqueData = bidsdata.filter((obj, index, self) =>
  index === self.findIndex((t) => (
    t.bidDesc === obj.bidDesc && t.jobName === obj.jobName && t.jobDesc === obj.jobDesc
  ))
);




function Mybids() {
  const [data,setdata] = useState(uniqueData);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    // fetch("http://localhost:5000/api/job/getjobs")
    axios.get("http://localhost:5000/api/proposal/getproposals",{
      headers: {'x-auth-token': token}
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data)
        return res.data;
      })
  }, []);

  console.log(Data);
  // let list = Data;
  return (
    <section className="bids">
      <div className="container">
        <div className="heading">
          <h2>My bids</h2>
        </div>
        <div className="wrapper2">

          {Data.map((item) => {
            return <Main jobName={item.jobid.jobName} jobDesc={item.jobid.description} bidDesc={item.biddescription} bidPrice={item.bidprice} />
          })}
        </div>

      </div>
    </section>
  );
}
export default Mybids;
