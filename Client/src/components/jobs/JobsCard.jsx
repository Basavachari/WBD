import React, { useEffect } from "react";
import axios from "axios";
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import  { useState } from 'react';

import Job from "./Jobs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const JobsCard = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // }

  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    // fetch("http://localhost:5000/api/job/getjobs")
    axios.get("http://localhost:5000/api/job/getjobbyuser",{
      headers: {'x-auth-token': token}
    })
      .then((res) => {
        console.log(res.data);
        setJobs(res.data)
        return res.data;
      })
  }, []);
  console.log(Jobs);

const [show, setShow] = useState(false);
const [popupcontent, setPopupcontent] = useState([]);
const changecontent = (job) =>  {
  setShow(true);
setPopupcontent([job]);};
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Carousel responsive={responsive}>
        {Jobs.map((jd) => {
          return (
            <><Card style={{ width: "18rem" }}>
              <div className="body" style={{ padding: 20 }}>
                <div className="title">{jd.jobName} </div>
                <div className=" mb-2 text-muted">{jd.category}</div>
                <div ClassName="Text">{jd.description}</div>
                <Button variant="outline-success" onClick={()=> changecontent(jd)} style={{ marginTop: "10px" }}>
                  view bids
                </Button>
             </div>
            </Card>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  {popupcontent.map((job) => {
                    return (
                      <div>
                        <Modal.Title>{job.jobName}</Modal.Title>
                        <div style={{marginTop:"5px", marginBottom:"10px", marginLeft:"5px"}}>{job.description}</div>
                      </div>
                    );
                  })}
                </Modal.Header>
                <Modal.Body>
                  <div className="heading" style={{marginTop:"5px", marginBottom:"10px", marginLeft:"5px"}}>

                 <h5 style={{color:'darkgreen'}}>bids</h5>
                  </div>
                    {popupcontent.map((job) => {
                      
                      return(
                        <Accordion>
                       {job.proposal.map((bid,index) => {
                        return(
                       <Accordion.Item eventKey={index}>
                        <Accordion.Header>{bid.biduser.username} &nbsp;  <b>{bid.bidprice}</b></Accordion.Header>
                        <Accordion.Body>
                          <div className="cover" style={{display:"flex", justifyContent:"space-between"}}>
                            <div className="description">
                            {bid.biddescription}
                            </div>
                          
                          <Button variant="success">accept</Button>
                          </div>
                        
                          </Accordion.Body>
                        </Accordion.Item> 
                        )
                         })}
                        </Accordion>
                      )
                     
                    })}
    
    
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-danger" onClick={handleClose}>
                    Close
                  </Button>
                  {/* <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button> */}
                </Modal.Footer>
              </Modal></>
          );
        })}
      </Carousel>
     
      
    </>
  );
};

export default JobsCard;
