import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../../actions/profile';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
  const AddExperience = ({addExperience}) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });
    const { company, title, location, from, to, current, description } = formData;
    //const navigate = useNavigate();
    
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
        addExperience(formData);
        handlePersonalClose();
         }
    return(<>
    <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Add
                        </Tooltip>
                    }>
                
                <button onClick={showPersonal} style={{border:"white"}} data-toggle="modal"><i className="fa fa-add" style={{fontSize:"20px", marginLeft:'3px'}}></i></button>
                </OverlayTrigger>
                <Modal show={personalShow} onHide={handlePersonalClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Create Your Profile
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="container">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
        e.preventDefault();
        handlePersonalSubmit();
        }}
      >
        <div className="form-group">
          <label className="label">Job title</label>
          <input
          className="input"
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Company</label>
          <input
          className="input"
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
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
        </div>
        <div className="form-group">
          <label className="label">From Date</label>
          <input
          className="input" type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
            className="checkbox"
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <label className="label">To Date</label>
          <input
          className="input"
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <label className="label">Job description</label>
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input
       type="submit" className="btn btn-primary my-1" />
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
AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
  };
  
  export default connect(null, { addExperience })(AddExperience);