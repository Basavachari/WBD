import React, { useState } from "react"
import {connect } from 'react-redux';
import { useEffect } from 'react';
import Login from "./Login";
import Navbar from "./partials/navbar";
import {Link } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';
import {setAlert} from '../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../components/layout/Alert';
import {register} from '../actions/auth'; 

const Register = ({setAlert,register,isAuthenticated}) => {
  const [formStep, setFormStep] = React.useState(0)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState({
    usernameErrors: "",
    emailErrors: "",
    passwordErrors: "",
    confirmPasswordErrors: ""
  })

  const navigate = useNavigate();
  const {username,email,password,confirmPassword}=formData;
  const handleSubmit=async (e)=> {
    e.preventDefault();
    if(formData.password!==formData.confirmPassword)
    setAlert('Password do not match','danger');
    // else{
    //   //register({username,email,mobile,password,confirmPassword});
    // }
    console.log(formData);
    if (errors.usernameErrors === "" && errors.passwordErrors === "" && errors.emailErrors === "" && errors.confirmPasswordErrors === ""){
      register({username,email,password});

     
      // try{
      //   const config={
      //     headers:{
      //       'Content-Type':'application/json'

      //     }}
      //     const body=JSON.stringify(formData);
          // const res=await axios.post('http://localhost:5000/api/users',body,config).then(response => {
          //   if (!response.ok) {
          //     throw new Error(response.statusText);
          //   }
          //   return response.json();
          // })
          // .then(data => {
          //   // handle success data
          //   navigate("/Login");
          // })
          // .catch(error => {
          //   // handle error
          //   alert(error);
          //   //setErrors({ ...errors, emailErrors: "**email is already in use" });

          // });
          // console.log(res.data);
      }
      // catch(err){
      //   //console.error(err.response.data);
      // }
//     axios.post('http://localhost:2001/users',formData).then(resp => {
//     console.log(resp.data);
// }).catch(error => {
//     console.log(error);
// });
    

  }

  if(isAuthenticated)
     navigate("/main");
     
  useEffect(() => {
    //   align-items: center;
    // display: flex;
    // justify-content: center;
    //  background-color: ; 
    // 👇 add class to body element
    document.body.classList.add('#d5eafc');

    // 👇 set style on body element
    document.body.style.backgroundColor = '#d5eafc';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.display = 'flex';
    return () => {
      // 👇 optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;
      document.body.style.justifyContent = null;
      document.body.style.alignItems = null;
      document.body.style.display = null;
      document.body.classList.remove('#d5eafc');
    };
  }, []);

  function handleInput(e){
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[name]:value})
    //console.log(value)
}
  // const completeFormStep = () => {
  //   if (formStep === 0) {
  //     if (errors.usernameErrors === "" && errors.passwordErrors === "" && errors.emailErrors === "" && errors.confirmPasswordErrors === "" && errors.mobileErrors === "")
  //       setFormStep(cur => cur + 1)
  //     else {
  //       setFormStep(cur => cur)
  //     }
  //   }

  //   if (formStep === 1) {
  //     if (errors.locationErrors === "" && errors.firstNameErrors === "" && errors.lastNameErrors === "" && errors.dobErrors === "")
  //       setFormStep(cur => cur + 1)
  //     else {
  //       setFormStep(cur => cur)
  //     }
  //   }

  //   if (formStep === 2) {
  //     setFormStep(cur => cur)
  //   }
  // }
  // const renderButton = () => {
  //     return (
  //       <input type="submit" value="Register" style={{ backgroundColor: "burlywood" }}
  //         className="btn shadow" />
  //     )
  //   }
  return (
    <>
             <Navbar/>
          
<section className="vh-100">
<br></br>
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
      <img src="images\login3.svg" className="img-fluid" alt=""/>
      </div>
      
      <div className="col-md-7 py-5 col-lg-5 col-xl-5 offset-xl-1">
     
            <form  onSubmit={handleSubmit} className="sign-up-form">
            {/* {formStep>0 &&<button onClick={goToPreviousState} type="button"><i className="fas fa-chevron-left"></i></button>} */}
             {/* <p>Step {formStep+1} of 3</p> */}
             <Alert/>
                  <h2 className="font-semibold text-3xl mb-8">
                    Sign Up
                  </h2>
                  <div className="field">
                  <label className="label" htmlFor="username">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      className="input"
                      onChange={
                        handleInput
                      }
                      // onChange={(event) => {
                      //   setFormData({ ...formData, username: event.target.value })
                      //   if (event.target.value === "") {
                      //     //setFormData({ ...formData, password: event.target.value })
                      //     setErrors({ ...errors, usernameErrors: "**username cannot be empty" })
                      //   }
                      //   else if (event.target.value.length < 3) {
                      //     setErrors({ ...errors, usernameErrors: "**username should be at least 3 characters long" })
                      //   }
                      //   else {
                      //     setErrors({ ...errors, usernameErrors: "" })
                      //   }
                      // }
                    
                    />
                    <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                    </div>
                    {/* <label htmlFor="" className="emailErrorLabel"><small className="errorLabel">{errors.usernameErrors}</small></label> */}
                    
                  </div>

                  <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      className="input"
                      onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                        var regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$");
                        if (event.target.value === "") {
                          //setFormData({ ...formData, password: event.target.value })
                          setErrors({ ...errors, emailErrors: "**email cannot be empty" })
                        }
                        else if (!regex.test(event.target.value)) {
                          setErrors({ ...errors, emailErrors: "**invalid email" })
                        }
                        else {
                          setErrors({ ...errors, emailErrors: "" })
                        }
                      }}
                    />
                    <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                    </div>
                    <small className="errorLabel">{errors.emailErrors}</small>
                    {/* <label htmlFor="" className="emailErrorLabel"></label> */}
                  </div>

                  {/* <div className="field">
                  <label className="label" htmlFor="mobile">Mobile Number</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      className="input"
                      onChange={(event) => {
                        setFormData({ ...formData, mobile: event.target.value })
                        var mobileRegex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
                        //Made by Gaurav jalkote
                        if (event.target.value === "") {
                          //setFormData({ ...formData, password: event.target.value })
                          setErrors({ ...errors, mobileErrors: "**mobile cannot be empty" })
                        }
                        else if (!mobileRegex.test(event.target.value)) {
                          setErrors({ ...errors, mobileErrors: "**invalid mobile number" })
                        }
                        else {
                          setErrors({ ...errors, mobileErrors: "" })
                        }
                      }}
                    />
                    <span className="icon is-small is-left"><i className="fas fa-mobile"></i></span>
                    </div>
                    <small className="errorLabel">{errors.mobileErrors}</small>
                  
                  </div> */}

                  <div className="field">
                  <label className="label" htmlFor="password">Password</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      className="input"
                      onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value })
                        if (event.target.value === "") {
                          //setFormData({ ...formData, password: event.target.value })
                          setErrors({ ...errors, passwordErrors: "**password cannot be empty" })//Gaurav
                        }
                        else if (event.target.value.length < 3) {
                          setErrors({ ...errors, passwordErrors: "**password should be at least 3 characters long" })
                        }
                        else {
                          setErrors({ ...errors, passwordErrors: "" })
                        }
                      }}
                    />
                    <span className="icon is-small is-left"><i className="fas fa-key"></i></span>
                    </div>
                    <small className="errorLabel">{errors.passwordErrors}</small>
                    {/* <label htmlFor="" className="emailErrorLabel"></label> */}
                  </div>

                  <div className="field">
                  <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      className="input"
                      onChange={(event) => {
                        setFormData({ ...formData, confirmPassword: event.target.value })
                        if (event.target.value === "") {
                          //setFormData({ ...formData, password: event.target.value })
                          setErrors({ ...errors, confirmPasswordErrors: "**confirmPassword cannot be empty" })//GJ
                        }
                        else if (event.target.value !== formData.password) {
                          setErrors({ ...errors, confirmPasswordErrors: "**confirmPassword should match with password" })
                        }
                        else {
                          setErrors({ ...errors, confirmPasswordErrors: "" })
                        }
                      }}
                    />
                    <span className="icon is-small is-left"><i className="fas fa-key"></i></span>
                    </div>
                    <small className="errorLabel">{errors.confirmPasswordErrors}</small>
                    {/* <label htmlFor="" className="emailErrorLabel"></label> */}
                  </div>


                {/*<section>
                  <h2 className="font-semibold text-3xl mb-8">Personal Information</h2>
                  <div className="container ">
                    <div className="field">
                      <label className="label" htmlFor="firstName">First Name</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, firstName: event.target.value })
                            if (event.target.value === "") {
                              //setFormData({ ...formData, firstName: event.target.value })
                              setErrors({ ...errors, firstNameErrors: "**firstName cannot be empty" })
                            }
                            else {
                              setErrors({ ...errors, firstNameErrors: "" })
                            }
                          }}
                        />
                        <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                      </div>

                      <small className="errorLabel">{errors.firstNameErrors}</small>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="Last Name">Last Name</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, lastName: event.target.value })
                            if (event.target.value === "") {
                              //setFormData({ ...formData, firstName: event.target.value })
                              setErrors({ ...errors, lastNameErrors: "**lastName cannot be empty" })
                            }
                            else {
                              setErrors({ ...errors, lastNameErrors: "" })
                            }
                          }}
                        />
                        <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                      </div>
                      <small className="errorLabel">{errors.lastNameErrors}</small>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="location">location</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                            if (event.target.value === "") {
                              //setFormData({ ...formData, password: event.target.value })
                              setErrors({ ...errors, locationErrors: "**location cannot be empty" })
                            }
                            else {
                              setErrors({ ...errors, locationErrors: "" })
                            }
                          }}
                        />
                        <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
                      </div>
                      <small className="errorLabel">{errors.locationErrors}</small>
                    </div>
                    <div className="field">
                      <label className="label">Date of Birth</label>


                      <div className="control has-icons-left has-icons-right">
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, dob: event.target.value })
                            if (event.target.value === "") {
                              //setFormData({ ...formData, dob: event.target.value })
                              setErrors({ ...errors, dobErrors: "**dob cannot be empty" })
                            }
                            else {
                              setErrors({ ...errors, dobErrors: "" })
                            }
                          }}
                        />
                        <span className="icon is-small is-left"><i className="fas fa-birthday-cake"></i></span>
                      </div>
                      <small className="errorLabel">{errors.dobErrors}</small>
                    </div>
                  </div>


                </section>)}
              {formStep === 2 && (
                <section>
                  <h2 className="font-semibold text-3xl mb-8">Resume Builder</h2>
                  <section >
                    <h4>Academic details</h4>
                    <div className="row">
                      <div className="container col-md-4">
                        <label className="label" htmlFor="mobile">College/University</label>
                        <div className="field">

                          <input
                            type="text"
                            id="college"
                            name="college"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, college: { ...formData.academic.college, name: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                    
                      <div className="container col-md-4">
                        <label className="label" htmlFor="passingYear">Passing Year</label>
                        <div className="field">
                          <input
                            type="month"
                            id="passingYear"
                            name="passingYear"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, college: { ...formData.academic.college, passingYear: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                      <div className="container col-md-4">
                        <label className="label" htmlFor="qualification">Qualification</label>
                        <div className="field">
                          <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, college: { ...formData.academic.college, qualification: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                    </div>


                    <div className="row">
                      <div className="container col-md-4">
                        <label className="label" htmlFor="school">School</label>
                        <div className="field">
                          <input
                            type="text"
                            id="school"
                            name="school"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, school: { ...formData.academic.school, name: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                      
                      <div className="container col-md-4">
                        <label className="label" htmlFor="passingYear">Passing Year</label>
                        <div className="field">
                          <input
                            type="month"
                            id="passingYear"
                            name="passingYear"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, school: { ...formData.academic.school, passingYear: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                      <div className="container col-md-4">
                        <label className="label" htmlFor="qualification">Qualification</label>
                        <div className="field">
                          <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, academic: { ...formData.academic, school: { ...formData.academic.school, qualification: event.target.value } } })
                            }}

                          />
                        </div>


                      </div>
                    </div>

                  </section>
                   <section>
                    <h4>Project</h4>
                    <div>
                      <label className="label" htmlFor="projectTitle">Title</label>
                      <div className="field">
                        <input
                          type="text"
                          id="projectTitle"
                          name="projectTitle"
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, project: { ...formData.project, title: event.target.value } })
                          }}

                        />
                      </div>

                      <label className="label" htmlFor="projectDeatils">Project Details</label>
                      <div className="field">
                        <textarea
                          type="text"
                          id="projectDetails"
                          name="projectDetails"
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, project: { ...formData.project, details: event.target.value } })
                          }}

                        />
                      </div>
                    </div>
                  </section> 
                   <section>
                    <h4>Work Experience</h4>
                    <div className="row">
                      <div className="col-md-5">
                        <label className="label" htmlFor="company">Company Name</label>
                        <div className="field">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, experience: { ...formData.experience, companyName: event.target.value } })
                            }}

                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <label className="label" htmlFor="role">Role</label>
                        <div className="field">
                          <input
                            type="text"
                            id="role"
                            name="role"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, experience: { ...formData.experience, role: event.target.value } })
                            }}

                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <label className="label" htmlFor="joiningDate">Joining Date</label>
                        <div className="field">
                          <input
                            type="month"
                            id="joinDate"
                            name="joinDate"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, experience: { ...formData.experience, joinDate: event.target.value } })
                            }}

                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <label className="label" htmlFor="endDate">End Date</label>
                        <div className="field">
                          <input
                            type="month"
                            id="endDate"
                            name="endDate"
                            className="input"
                            onChange={(event) => {
                              setFormData({ ...formData, experience: { ...formData.experience, endDate: event.target.value } })
                            }}

                          />
                        </div>
                      </div>
                      <label className="label" htmlFor="experienceDetails">Details</label>
                      <div className="field">
                        <textarea
                          type="text"
                          id="experienceDetails"
                          name="experienceDetails"
                          className="input"
                          onChange={(event) => {
                            setFormData({ ...formData, experience: { ...formData.experience, details: event.target.value } })
                          }}

                        />
                      </div>
                    </div>
                  </section> 

                </section>)}*/}

              {/* {renderButton()} */}
              <input type="submit" value="Register"  style={{backgroundColor:"burlywood"}}
            className="btn shadow" />
            <p className="redirect">
            Already a user? <Link to="/login" style={{color:'lightseagreen'}}>Log In</Link> Here.
            </p>

            </form>
            </div>
    </div>
    </div>
    </section>
    </>
  )
}

Register.propTypes={
  setAlert:PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated
});
export default connect(mapStateToProps,{setAlert,register}) (Register);