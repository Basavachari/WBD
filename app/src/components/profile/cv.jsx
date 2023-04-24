import React, { useState, useEffect } from 'react'
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Header from '../../common/header/Header';
import Search from '../../common/header/Search';
import EditEducation from './updateComponents/EditEducation';
import EditExperience from './updateComponents/EditExperience';
import EditProfile from './createCV/EditProfile';
import EditAvatar from './updateComponents/EditAvatar';
import './cv.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import axios from 'axios'
import CreateProfile from './createCV/CreateProfile';
import CreateExperience from './createCV/CreateExperience';
import CreateEducation from './createCV/CreateEducation';
import Experience from './displayCV/Experience';
import Education from './displayCV/Education';
import Alert from '../layout/Alert'
const CV = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  //const username=localStorage.getItem('username');
  const [Data, setData] = useState({
    company: " ",// (!profile.company || !profile)? '':profile.company,
    mobile: '', //!profile.mobile?'':profile.mobile,
    location: "",// (!profile.location || !profile)? '':profile.location,
    firstName: '',//profile.username,
    lastName: 'Sparrow',
    website: '',//!profile.website? '':profile.website,
    academic: {
      college: {
        name: 'Indian Institute of Information Technology Sri City',
        passingYear: '2024-10',
        qualification: "Btech In Computer Science and Engineering"
      },
      school: {
        name: 'Saint Joseph School',
        passingYear: '2019-04',
        qualification: 'High School'
      }
    },
    project: {
      title: 'Freelancing',
      details: 'The scope of this project is a web-based system that supports the marketing of GA freelancing services directly to the customers.Gratis agency is a hiring platform,a talent marketplace,a communication and collaboration workplace'
    },
    experience: {
      companyName: 'Freelancer',
      role: 'Front End Developer',
      joinDate: '2012-03',
      endDate: '2014-09',
      details: 'Cooperated with designers to create clean interfaces and simple,initutive interactions and experiences.Develope project concepts and maintain optimal workflow.Worked with senior developer to design complex projects for coorporate clients.'
    }


  })
  const mystyle1 = {
    // display: 'flex',
    // height: "340px",
    // marginBottom: '120px',

  }


  return (

    <> 
      <Search />

      <div className="text-small px-3" >
        <Alert />
        {profile !== null ? (
          <>
            <div className="container" >
              <div className="row" style={mystyle1} >
                <div style={{ background: "#d0cecf" }} className="col-sm-3  shadow">

                  {/* <img className="img-fluid img-thumbnail shadowless" src={user.avatar} style={{ width: "100%" }} alt="Avatar"> <EditAvatar/></img> */}
                  <EditAvatar />

                  <div className="display-bottomleft container text-black">
                    <h5 className="text-centre has-name" style={{ fontFamily: "Cartograph", textAlign: "center" }}><b>{user.username}</b>
                      <EditProfile />
                    </h5>

                  </div>
                  <div className="content container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.status}({profile.company})</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.location}</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{user.email}</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.mobile}</p>
                    <hr></hr>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ fontWeight: 'bold' }}>Skills</p>
                      <ul style={{ paddingLeft: '0', marginLeft: '0' }}>
                        {profile.skills.slice(0, 4).map((skill, index) => (
                          <li key={index} style={{ listStyleType: 'none', marginBottom: '10px' }}>
                            <i className='fas fa-check w3-margin-right w3-large w3-text-teal' />
                            <span style={{ fontWeight: 'bold' }}>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>


                </div>

                <div className="col-sm-9  shadow">
                  <div className="container">
                    {profile !== null && profile.experience !== null ? (
                      <>
                        <h4 className="text-grey padding-6" style={{ fontFamily: "Thermometer", textAlign: "center" }}>About Myself</h4>
                        <div className="row py-2 container card">
                          {profile.bio}
                        </div>
                      </>) : (<></>)
                    }
                    <hr></hr>
                    <div className="container white margin-bottom">
                      <h4 className="text-grey padding-6" style={{ fontFamily: "Thermometer", textAlign: "center" }}>Work Experience
                        <CreateExperience />
                      </h4>
                      {profile !== null && profile.experience.length > 0 ? (
                        <>
                          <Experience experience={profile.experience} owner ={"1"} />


                        </>
                      ) : <>
                        No experience found
                      </>}
                      <hr></hr>
                      <div className="row">
                        <h4 className=" padding-6 text-center" style={{ fontFamily: "Thermometer", textAlign: "centre" }}>Education
                          <CreateEducation />
                        </h4>
                        <div className="col-sm-12 container shadow ">
                          {profile !== null && profile.education.length > 0 ? (
                            <>
                              <Education education={profile.education} owner = {"1"} />
                            </>
                          ) : <>
                            No education found
                          </>}

                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <br />
          </>
        ) : (
          <div>
            <p>You have not yet setup a profile, please add some info</p>
            <CreateProfile />
          </div>
        )}
      </div></>)
}

CV.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  //deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  CV
);