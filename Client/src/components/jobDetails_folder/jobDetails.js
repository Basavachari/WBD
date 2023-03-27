import React,{useState} from 'react'
import Bid from './bid'
import Discription from './discription'
import Proposal from './proposals'
import ClientDetails from './clientDetails'
import './details.css'

export default function JobDetails(props) {
    // title = "name of job"
    // proposals =[ { }, { }]
    const [bid, setBid] = useState({})

    const getdetails=(val)=>{
        props.Job.proposal.push(val)
        console.log(props)
        setBid(val);

        
    }
    
    return (
        <div>
            <div class="container-fluid headingdesc">
                <div class="name">
                    <h1 class="projectName"> {props.Job.title}</h1>
                </div>
                <div class="buttons">
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
                            <Discription details={props.Job.details} />
                            <Bid getdata ={getdetails} />
                        </div>
                        <div class="col-12 col-lg-4 order-1">
                            <ClientDetails />
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
                        {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                    </div>
                    {
                        props.Job.proposal.map((pro)=>{
                            return <Proposal proposal={pro}/>}
                        )
                    }
                </div>

            </div >
        </div>
    )
}
