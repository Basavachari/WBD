import React from 'react'
import img from './avatar69.jpg'
import axios from 'axios'
import { useEffect } from 'react'

export default function Proposals(props ) {
    const [ProposalData, setProposalData] = React.useState({});
    useEffect(() => {
        // console.log(job_id)
        axios.get(`http://localhost:5000/api/proposal/getproposal/${props.proposal}`).then(
            (res)=>{
                // console.log(res.data)
                setProposalData(res.data);
                return 
            }
        );
      }, [ProposalData, props.proposal]);
    // console.log(ProposalData);
    return (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Rs.{ProposalData.bidprice} per hour</h5>
                        <p class="card-text">{ProposalData.biddescription}</p>
                    </div>
                </div>
            
        
    )
}
