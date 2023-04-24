import React, { useState, useEffect } from 'react';
import './addJob.css'
import axios from "axios";
// import image from './img1.png'
//import { ThemeContext } from "./App";
import { Link } from 'react-router-dom';
const Swal = require('sweetalert2')

export default function AddJob() {
    const init = {
        jobName: '',
        price: '',
        email: '',
        experience: '',
        category: '',
        skills: '',
        country: '',
        jobType: '',
        description: '',
    };
    const [data, setData] = useState(init)
    const [hover, setHover] = useState();
    const [dataErrors, setDataErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    const handleMouseIn = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };
    // const style = useContext(ThemeContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataErrors(validate(data));
        // setIsSubmit(true);
        if (Object.keys(dataErrors).length === 0) {
            // let user = axios.get("https://localhost:5000/api/")
            axios.post("http://localhost:5000/api/job/addjob", data);
            // alert("Job added successfully ");
            setData(init);
            Swal.fire(
                'Job Posted',
            'Your job has been posted successfully',
            'success'
              )
        }


    };
    useEffect(() => {
        console.log(dataErrors);    
        if (Object.keys(dataErrors).length === 0) {
            console.log(data);
        }
    }, [dataErrors]);
    const validate = (val) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!val.jobName) {
            errors.jobName = " * Job title is required!";
        }
        if (!val.price) {
            errors.price = " * Amount is required!";
        }
        if (!val.country) {
            errors.country = "* Please enter country name!";
        }
        if (val.skills.length===0) {
            errors.skills = "* Skills are required!";
        }
        if (!val.email) {
            errors.email = '* Email is required!';
        } else if (!regex.test(val.email)) {
            errors.email = '* Please enter a valid email address!';
        }
        return errors;
    };
    return (
        <div className="add_cont" >
            {/* {Object.keys(dataErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Job successfully appended</div>
      ) : (
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      )} */}

            <form onSubmit={handleSubmit}>
                <h1>Job Details</h1>
                <div className="add_row">
                    <div className="add_col">
                        <div className="ui divider">
                            <div className="add_field">
                                <label className='name'>JobName</label>
                                <input
                                    type="text"
                                    value={data.jobName}
                                    id="jobName"
                                    name="jobName"
                                    onChange={handleChange}
                                    placeholder="Job Title"
                                />
                            </div>
                            <p className='errors' >{dataErrors.jobName}</p>

                            <div className="add_field">
                                <label className='name'>Price</label>
                                <input
                                    name="price"
                                    type="number"
                                    id="price"
                                    value={data.price}
                                    onChange={handleChange}
                                    placeholder="Price Ex:Rs.2000"
                                />
                            </div>
                            <p className='errors'>{dataErrors.price}</p>
                            <div className="add_field">
                                <label className='name'>Email</label>
                                <input id="email"
                                    name='email'
                                    type="text"
                                    value={data.email}
                                    onChange={handleChange}
                                    placeholder='Email Address'
                                />
                            </div>
                            <p className='errors'>{dataErrors.email}</p>

                            <div className="add_field">
                                <label className='name'>Skills</label>
                                <input name="skills"
                                    type="text"
                                    id="skills"
                                    value={data.skills}
                                    onChange={handleChange}
                                    placeholder="Skills are like HTML,CSS,.."
                                />
                            </div>
                            <p className='errors'>{dataErrors.skills}</p>

                            <div className="add_field">
                                <label className='name'>Country</label>
                                <input name="country"
                                    type="text"
                                    id="country"
                                    value={data.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                />
                            </div>
                            <p className='errors'>{dataErrors.country}</p>
                        </div>
                    </div>
                    <div className="add_cont" >
                        <div className="add_col1">
                            <div className="add_field">
                                <label className='name'>Experience :</label>
                                <br/>
                                <select
                                    name="experience"
                                    className="form-select"
                                    id="experience"
                                    value={data.experience}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option selected disabled value="">Experience Level </option>
                                    <option value="entry">EntryLevel</option>
                                    <option value="intermediate">IntermediateLevel</option>
                                    <option value="expert">Expert</option>
                                </select>

                            </div>

                            <div className="add_field">
                                <label className='name'>Job Category :</label>
                                <br/>
                                <select
                                    name="category"
                                    id="category"
                                    value={data.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option selected disabled value="">Job Category </option>
                                    <option value="Web development">Web development</option>
                                    <option value="Frontend developer">Frontend developer</option>
                                    <option value="Backend developer">Backend developer</option>
                                    <option value="Web Designer">Web Designer</option>
                                    <option value="Flutter development">Flutter developer</option>
                                    <option value="UI/UX designers">UI/UX designers</option>
                                </select>
                            </div>

                            <div className="add_field">
                                <label className='name'>Job Type :</label>
                                <br></br>
                                <select
                                    name="jobType"
                                    id="jobType"
                                    value={data.jobType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option selected disabled value="">Salary Type</option>
                                    <option value="hourly">Paying Hourly</option>
                                    <option value="fixedPrice">Fixed Prices</option>
                                </select>
                            </div>


                            <div className="add_field">
                                <label className='name'>Job Description :</label>
                                <br></br>
                                <textarea name="description"
                                    type="text"
                                    id="description"
                                    value={data.description}
                                    rows='3'
                                    placeholder="Description about project"
                                    onChange={handleChange}
                                    required />
                            </div>
                            <p>{dataErrors.description}</p>

                        </div>

                    </div>
                </div>
                <div className='buttonClass'>
               
                    <button type='submit' className='fluid ui button blue' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}> {hover ? "Submit" : "Add Job"} </button>
           
                    {/* <button type='submit' className='fluid ui button blue' >Add Job</button> */}
                
                </div>
            </form>
        </div>

    );
}