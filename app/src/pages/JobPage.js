import axios from "axios";
import React from "react";
//import use effect 
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../common/footer/Footer";
// import Header from "../common/header/Header";
import Search from "../common/header/Search";
import JobDetails from "../components/jobdetails/jobDetails";
import Job from "../components/jobdetails/somedata"




function JobPage(props){
    const {job_id} = useParams();
// console.log(props.jobId.routeMatch.job_id)
    const [JobData, setJobData] = React.useState({});
    useEffect(() => {
        // console.log(job_id)
        axios.get(`http://localhost:5000/api/job/getjob/${job_id}`).then(
            (res)=>{
                console.log(res.data)
                setJobData(res.data);
                return 
            }
        )
      }, [setJobData, job_id]);

    return(
        <><Search />
        <JobDetails JobData = {JobData} jobId = {job_id}/>
        <Footer /></>
    )
}
export default JobPage