import React, { useState } from 'react'
import Bid from './bid'
import axios from 'axios'
import { useEffect } from 'react'

// import Discription from './discription'
import Proposal from './proposals'
import './details.css'

export default function JobDetails(props) {
    // title = "name of job"
    // proposals =[ { }, { }]
    // const [bid, setBid] = useState({})

    // const getdetails = (val) => {
    //     JobData.proposal.push(val)
    //     console.log(props)
    //     setBid(val);
    // }

    // const [JobData, setJobData] = React.useState({});
    // useEffect(async() => {
    //     // console.log(job_id)
    //     const Job = await axios.get(`http://localhost:5000/api/job/getjob/${props.jobId}`).then(
    //         (res)=>{
    //             // console.log(res.data.user.username)
    //             setJobData(res.data);
    //             return res.data
    //         }
    //     )
    //     // setJobData(Job)
    //     console.log(JobData)
    //   }, [setJobData, props.jobId]);

    // console.log(props.Job)
    console.log(props.JobData)
    return (
        <div>
            <div class="container-fluid headingdesc">
                <div class="name">
                    {/* <h1 class="projectName"> {props.Job.jobName}</h1> */}
                    <h1 class="projectName"> {props.JobData.jobName}</h1>

                </div>
                <div class="buttons-div">
                    <p>
                        <a class="btn btn-secondary" data-bs-toggle="collapse" href="#details" role="button" aria-expanded="false"
                            aria-controls="collapseExample">
                            Project Details
                        </a>
                        <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#proposals"
                            aria-controls="proposals">Proposals</button>
                    </p>
                </div>
            </div>
            <br />
            <div class="container">
                <div class="collapse show" id="details">
                    <div class="row">
                        <div class="col-12 col-lg-8 order-1">
                            {/* <Discription details={props.Job.description} skills = {props.Job.skills} /> */}
                            <div>
                                <div class="card">
                                    <div class="card-body1">
                                        <h5 class="card-title">Project Details</h5>
                                        <hr />
                                        <p class="card-text">{props.JobData.description}</p>
                                        <h6>Skills Required</h6>
                                        <div>{
                                            props.JobData.skills && props.JobData.skills.map((skill) => {
                                                return <button class="btn-skills">{skill}</button>

                                            })
                                        } </div>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <Bid jobId = {props.jobId}/>
                        </div>
                        <div class="col-12 col-lg-4 order-1">
                        <div>
                <div class="card">
                  <div class="card-body1">
                    <h5 class="card-title">About client</h5>
                    <hr/>
                    <p class="card-text1">
                      Country : <span class="country">{props.JobData.country}</span> <br/>
                      Owner : {props.JobData.user && props.JobData.user.username }<br/>
                      Member since <span>Mar 2022</span>
                    </p>
                    <hr/>
                    <h6>Client Verification</h6>
                    <li>Identity verified</li>
                    <li>Payment verified</li>
                    <li>Email verified</li>
                    <li>Phone verified</li>
                    <li>Profile Completed</li>
                  </div>
                </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="proposals ">
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="proposals"
                    aria-labelledby="header">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="header">Proposals</h5>
                        <hr />
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
            <div class="offcanvas-body">

                    {
                        props.JobData.proposal && props.JobData.proposal.map((pro)=>{
                            return <Proposal proposal={pro}/>}
                        )
                    }
                </div>
                    </div>
            </div >
        </div>
    )
}
