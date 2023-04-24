import React from 'react'

export default function clientDetails() {
    const Job={
        country:"India",
        Owner:"Basava"
    }
    return (
        <div>
                <div class="card">
                  <div class="card-body1">
                    <h5 class="card-title">About client</h5>
                    <hr/>
                    <p class="card-text1">
                      Country : <span class="country">{Job.country}</span> <br/>
                      Owner :{Job.Owner }<br/>
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
    )
}
