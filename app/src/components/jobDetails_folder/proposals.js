import React from 'react'
import img from './avatar69.jpg'

export default function Proposals(props ) {
    
    return (
        <div>
            <div class="offcanvas-body">
                {/* <% for(var i=0;i<(locals.Job.Proposals).length;i++) {%> */}
                <div class="card">
                    <div class="card-header">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <img src={img}class="card-img-top" alt="profilePic" />
                                </div>
                                <div class="col">
                                    <p><span class="name">{props.proposal.name}</span><br />Reviews: <span class="review">4.9</span> /5.0</p>
                                    {/* <%if(locals.username==locals.Job.Owner ) { %> */}
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=client.doJob@gmail.com&su=About+the+proposal+you+made&body=Mail+me+your+details">Mail him</a>
                                    {/* <%}%> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Rs.{props.proposal.price} per hour</h5>
                        <p class="card-text">{props.proposal.discribe}</p>
                    </div>
                </div>
                {/* <% } %> */}

            </div>
        </div>
    )
}
