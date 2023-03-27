import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../../actions/profile';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    mobile: '',
    bio: ''
  };
  const CreateProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile
  }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    useEffect(() => {
        // if there is no profile, attempt to fetch one
        if (!profile) getCurrentProfile();
    
        // if we finished loading and we do have a profile
        // then build our profileData
        if (!loading && profile) {
          const profileData = { ...initialState };
          for (const key in profile) {
            if (key in profileData) profileData[key] = profile[key];
          }
        //   for (const key in profile.social) {
        //     if (key in profileData) profileData[key] = profile.social[key];
        //   }
          // the skills may be an array from our API response
          if (Array.isArray(profileData.skills))
            profileData.skills = profileData.skills.join(', ');
          // set local state with the profileData
          setFormData(profileData);
        }
      }, [loading, getCurrentProfile, profile]);
       
      const {
        company,
        website,
        location,
        status,
        skills,
        mobile,
        bio
      } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
       const [personalShow, setPersonalShow] = useState(false);
       const showPersonal = () => setPersonalShow(true);
       const handlePersonalClose = () => {
        setPersonalShow(false);
      };
    //   useEffect(() => {
    //     handlePersonalClose();
    //   }, [formData]);
          function handlePersonalSubmit(e){
        e.preventDefault();
        createProfile(formData, navigate, profile ? true : false);
        handlePersonalClose();
         }
    return(<>
    <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                  
                    <button onClick={showPersonal} className="btn bg-dark text-white text-center" data-toggle="modal">Create Profile</button>
                </OverlayTrigger>
                <Modal show={personalShow} onHide={handlePersonalClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Create Your Profile
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="container">
      <p className="lead">
        <i className="fas fa-user" />
        {` Let's get some information to make your`}
         
      </p>
      <form className="form" onSubmit={handlePersonalSubmit}>
        <div className="form-group">
        <label className="label">Profession</label>
          <select className="input select" name="status" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <br></br>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
            <label className="label">Company name</label>
          <input
            className="input"
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
        <label className="label">Website</label>
          <input
          className="input"
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
        <label className="label">Location</label>
          <input
          className="input"
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
        <label className="label">Skills</label>
          <input
          className="input"
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
        <label className="label">Mobile</label>
          <input
          className="input"
            type="mobile"
            placeholder="Mobile No"
            name="mobile"
            value={mobile}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">
            Clients can contact you using this
          </small>
        </div>
        <div className="form-group">
        <label className="label">Bio</label>
          <textarea
          className="input"
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <br></br>
          <small className="form-text">Tell us a little about yourself</small>
        </div>


        
        

        <input  type="submit" className="btn btn-primary my-1" />
      </form>
    </section>
            {/* <EditForm theEmployee={employee} /> */}
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handlePersonalClose}>
                    Close
                </Button>
        </Modal.Footer>
    </Modal>
    </>)
}
CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    CreateProfile
  );