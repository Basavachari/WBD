import React,{useState,useEffect} from 'react'

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
function EditExperience({Data,setData})
{
    const [experienceData,setExperienceData]=useState({
        companyName:Data.experience.companyName,
            role:Data.experience.role,
            joinDate:Data.experience.joinDate,
            endDate:Data.experience.endDate,
            details:Data.experience.details
       })
    const [experienceShow, setExperienceShow] = useState(false);
    const showExperience = () => setExperienceShow(true);
    const handleExperienceClose = () => {
      setExperienceShow(false);
      setExperienceData({
        companyName: Data.experience.companyName,
        role: Data.experience.role,
        joinDate: Data.experience.joinDate,
        endDate: Data.experience.endDate,
        details: Data.experience.details,
      });
    };
    useEffect(() => {
      handleExperienceClose();
    }, [Data]);    function handleExperienceSubmit(e){
        e.preventDefault();
        setData({ ...Data,experience:{...Data.experience,companyName:experienceData.companyName,role:experienceData.role,joinDate:experienceData.joinDate,endDate:experienceData.endDate,details:experienceData.details}})
        handleExperienceClose();
         }
    
    return(<><OverlayTrigger
        overlay={
            <Tooltip id={`tooltip-top`}>
                Edit
            </Tooltip>
        }>
        <button onClick={showExperience} style={{backgroundColor:"white",border:"white"}} data-toggle="modal"><i className="fa fa-edit" style={{fontSize:"20px", marginLeft:'5px'}}></i></button>
    </OverlayTrigger>
    <Modal show={experienceShow} onHide={handleExperienceClose}>
<Modal.Header closeButton>
<Modal.Title>
    Edit Work Experience 
</Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleExperienceSubmit}>
<div>
  <label htmlFor="companyName">Comapany</label>
<div className="field">
<input
  type="text"
  id="companyName"
  name="companyName"
  value={experienceData.companyName}
  className="input"
  onChange={(event) =>{
    setExperienceData({ ...experienceData,companyName:event.target.value})}}

/>
</div>

<label htmlFor="role">Role</label>
<div className="field">
<input
  type="text"
  id="role"
  value={experienceData.role}
  name="role"
  className="input"
  onChange={(event) =>{
    setExperienceData({ ...experienceData,role:event.target.value})}}

/>
</div>
<label htmlFor="joinDate">Join Date</label>
<div className="field">
<input
  type="month"
  id="joinDate"
  name="joinDate"
  value={experienceData.joinDate}
  className="input"
  onChange={(event) =>{
    setExperienceData({ ...experienceData,joinDate:event.target.value})}}

/>
</div>
<label htmlFor="endDate">End date</label>
<div className="field">
<input
  type="month"
  id="endDate"
  name="endDate"
  value={experienceData.endDate}
  className="input"
  onChange={(event) =>{
    setExperienceData({ ...experienceData,endDate:event.target.value})}}

/>
</div>
<label htmlFor="details">Details</label>
<div className="field">
<textarea
  type="text"
  id="details"
  name="details"
  value={experienceData.details}
  className="input"
  onChange={(event) =>{
    setExperienceData({ ...experienceData,details:event.target.value})}}

/>
</div>
  </div>
  <br></br>
<button className="btn btn-primary" type="submit">Save changes</button>
</form>
{/* <EditForm theEmployee={employee} /> */}
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleExperienceClose}>
        Close
    </Button>
</Modal.Footer>
</Modal>
</>);
}
export default EditExperience;