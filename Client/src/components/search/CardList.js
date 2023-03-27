import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import NoResults from "./NoResults";

export default function CardList(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    // fetch("http://localhost:5000/api/job/getjobs")
    axios.get("http://localhost:5000/api/job/getjobs",{
      headers: {'x-auth-token': token}
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data)
        return res.data;
      })
  }, []);

  console.log(Data);
  let list = Data;

  if (Data.length > 0) {
    if(props.query){
      list = Data.filter((job)=>job.jobName.include(props.query)) 
    }
    if (props.cat) {
      list = Data.filter((job) => job.category === props.cat)
    }
    if (props.exp) {
      list = list.filter((job) => job.experience === props.exp)
    }
    if(props.type){
      list = list.filter((job)=>job.jobType === props.type)
    }
    if(list.length>0){
      return (<>
        {
        list.map((card)=> <Card card={card}/>)}
        </>)
    }
    else return (<NoResults />)


  } 
  else return (<NoResults />)
}