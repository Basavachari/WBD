import React from 'react'

export default function discription(props) {

    return (
        <div>
            <div class="card">
                <div class="card-body1">
                    <h5 class="card-title">Project Details</h5>
                    <hr/>
                        <p class="card-text">{props.details.disc}</p>
                        <h6>Skills Required</h6>
                        <div>{
                            props.details.skills.map((skill)=>{
                                return <button class="btn-skills">{skill}</button>

                            })
                        }
                        </div>
                </div>
            </div>
        </div>
    )
}
