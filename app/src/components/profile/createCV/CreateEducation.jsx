import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../../actions/profile';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
  const AddEducation = ({addEducation}) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });
    const { school, degree, fieldofstudy, from, to, current, description } = formData;
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
        addEducation(formData);
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
                Add Education Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="container">
      <h1 className="large text-primary">Add An Education</h1>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
        e.preventDefault();
        handlePersonalSubmit();
        }}
      >
        <div className="form-group">
        <label className="label">Degree</label>
          <input
          className="input"
            type="text"
            placeholder="* Degree"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">School</label>
          <input
          className="input"
            type="text"
            placeholder="* School"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
        <label className="label">Field of study</label>
          <input
          className="input"
            type="text"
            placeholder="fieldofstudy"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
        <label className="label">From Date</label>
          <input className="input" type="month" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <label className="label"></label>
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
            type="month"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
        <label className="label">Description</label>
          <textarea
          className="input"
            name="description"
            cols="30"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
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
AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
  };
  
  export default connect(null, { addEducation })(AddEducation);