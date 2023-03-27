import React from "react"

import "./style.css"
import JobsCard from "./JobsCard"
const JobDeals = () => {
 

  return (
    <>
      <section className='flash'>
        
        <div className='container' >
          <div className='nitish' >
            <h2>My Job listing</h2>
          </div>
          <div className="something" >
          <JobsCard  />
          </div>
          
        </div>
      </section>
    </>
  )
}

export default JobDeals
