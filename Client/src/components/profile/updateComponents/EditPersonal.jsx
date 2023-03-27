import React,{useState,useEffect} from 'react'

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
function EditPersonal({Data,setData})
{
    const [personalData,setPersonalData]=useState({
        email:Data.email,
        mobile:Data.mobile,
        location:Data.location,
        firstName:Data.firstName,
        lastName:Data.lastName,
        dob:Data.dob
       })
       
      
       
      
       const [personalShow, setPersonalShow] = useState(false);
       const showPersonal = () => setPersonalShow(true);
       const handlePersonalClose = () => {
        setPersonalShow(false);
        setPersonalData({
          email: Data.email,
          mobile: Data.mobile,
          location: Data.location,
          firstName: Data.firstName,
          lastName: Data.lastName,
          dob: Data.dob,
        });
      };
      useEffect(() => {
        handlePersonalClose();
      }, [Data]);      function handlePersonalSubmit(e){
        e.preventDefault();
        setData({ ...Data,firstName:personalData.firstName,lastName:personalData.lastName,dob:personalData.dob,email:personalData.email,mobile:personalData.mobile,location:personalData.location})
        handlePersonalClose();
         }
    return(<>
    <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={showPersonal} style={{border:"white"}} data-toggle="modal"><i className="fa fa-edit" style={{fontSize:"20px", marginLeft:'3px',background:"#d0cecf"}}></i></button>
                </OverlayTrigger>
                <Modal show={personalShow} onHide={handlePersonalClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Personal Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlePersonalSubmit}>
          <div>
              <label htmlFor="firstName">First Name</label>
            <div className="field">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={personalData.firstName}
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,firstName:event.target.value})}}
        
            />
            </div>

            <label htmlFor="lastName">Last Name</label>
            <div className="field">
            <input
              type="text"
              id="lastName"
              value={personalData.lastName}
              name="lastName"
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,lastName:event.target.value})}}
      
            />
            </div>
            <label htmlFor="location">Location</label>
            <div className="field">
            <input
              type="text"
              id="location"
              name="location"
              value={personalData.location}
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,location:event.target.value})}}
        
            />
            </div>
            <label htmlFor="email">Email</label>
            <div className="field">
            <input
              type="text"
              id="email"
              name="email"
              value={personalData.email}
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,email:event.target.value})}}
        
            />
            </div>
            <label htmlFor="mobile">Mobile</label>
            <div className="field">
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={personalData.mobile}
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,mobile:event.target.value})}}
        
            />
            </div>

            <label htmlFor="dob">Date of Birth</label>
            <div className="field">
            <input
              type="date"
              id="dob"
              name="dob"
              value={personalData.dob}
              className="input"
              onChange={(event) =>{
                setPersonalData({ ...personalData,dob:event.target.value})}}
        
            />
            </div>
              </div>
          <button className="btn btn-primary" type="submit">Save changes</button>
          </form>
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
export default EditPersonal;