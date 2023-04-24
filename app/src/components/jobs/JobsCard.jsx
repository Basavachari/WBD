import React, { useEffect } from "react";
import axios from "axios";
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import { useState } from 'react';

import Job from "./Jobs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2'
import { useRef } from 'react';

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
const Swal = require('sweetalert2')
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
    axios.get("http://localhost:5000/api/job/getjobbyuser", {
      headers: { 'x-auth-token': token }
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
  const changecontent = (job) => {
    setShow(true);
    setPopupcontent([job]);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form1 = useRef();
  // console.log(form1);
  const sendEmail = (e) => {
    Swal.fire(
      'Mail Sent',
      'you should get Reply from the bidder soon',
      'success'
    )
    e.preventDefault();

    // Accessing the form fields and modifying their values
    form1.current.from_name.value = "Nitish";
    form1.current.to_name.value = "Basava";
    form1.current.to_email.value = "nitishreddynitu11@gmail.com"
    form1.current.message.value = "This is a test message";

    //   const formData = new FormData(form1.current);

    // // Modifying the formData object
    // formData.set("from_name", "Nitish");
    // formData.set("to_name", "Basava");
    // formData.set("to_email", "nitishreddynitu11@gmail.com");
    // formData.set("message", "This is a test message");

    emailjs.sendForm('service_l54zlij', 'template_pt8qkn9', form1.current, 'efaMZX3_PGXlOGSL1')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {Jobs.map((jd) => {
          return (
            <><Card style={{ width: "18rem",height:'320px' }}>
              <div className="body" style={{ padding: 20 }}>
                <div className="title">{jd.jobName} </div>
                <div className=" mb-2 text-muted">{jd.category}</div>
                <div ClassName="Text">{jd.description}</div>
                <Button variant="outline-success" onClick={() => changecontent(jd)} style={{ marginTop: "10px" }}>
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
                        <div style={{ marginTop: "5px", marginBottom: "10px", marginLeft: "5px" }}>{job.description}</div>
                      </div>
                    );
                  })}
                </Modal.Header>
                <Modal.Body>
                  <div className="heading" style={{ marginTop: "5px", marginBottom: "10px", marginLeft: "5px" }}>

                    <h5 style={{ color: 'darkgreen' }}>bids</h5>
                  </div>
                  {popupcontent.map((job) => {

                    return (
                      <Accordion>
                        {job.proposal.map((bid, index) => {
                          return (
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header>{bid.biduser.username} &nbsp;  <b>{bid.bidprice}</b></Accordion.Header>
                              <Accordion.Body>
                                <div className="cover" style={{ display: "flex", justifyContent: "space-between" }}>
                                  <div className="description">
                                    {bid.biddescription}
                                  </div>

                                  <form style={{ padding: '0', border: 'none' }} ref={form1} onClick={sendEmail}>
                                    <Button variant="success">accept</Button>
                                    {/* <label>Message</label>
                            <textarea name="message" /> */}
                                    <input id="notvisible" type="text" name="from_name" />
                                    <input id="notvisible" type="text" name="to_name" />
                                    <input id="notvisible" type="text" name="to_email" />
                                    <input id="notvisible" type="textarea" name="message" />
                                    <input id="notvisible" type="button" value="Send" />
                                  </form>                          </div>

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
