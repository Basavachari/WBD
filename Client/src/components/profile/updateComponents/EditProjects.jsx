import React from "react"
import react,{useState,useEffect} from 'react'

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
function EditProjects({Data,setData})
{
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setProjectData({
          title: Data.project.title,
          details: Data.project.details,
        });
      };
      useEffect(() => {
        handleClose();
      }, [Data]);
    const [show, setShow] = useState(false);
    const [projectData,setProjectData]=useState({
        title:Data.project.title,
        details:Data.project.details
       })
       function handleProjectSubmit(e){
        e.preventDefault();
        setData({ ...Data,project:{...Data.project,title:projectData.title,details:projectData.details}})
        handleClose();
         }
    return (<>
    <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} style={{backgroundColor:"white",border:"white"}} data-toggle="modal"><i className="fa fa-edit" style={{fontSize:"20px", marginLeft:'5px'}}></i></button>
                </OverlayTrigger>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Projects 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleProjectSubmit}>
          <div>
              <label htmlFor="projectTitle">Title</label>
            <div className="field">
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={projectData.title}
              className="input"
              onChange={(event) =>{
                setProjectData({ ...projectData,title:event.target.value})}}
        
            />
            </div>

            <label htmlFor="projectDeatils">Project Details</label>
            <div className="field">
            <textarea
              type="text"
              id="projectDetails"
              value={projectData.details}
              name="projectDetails"
              className="input"
              onChange={(event) =>{
                setProjectData({ ...projectData,details:event.target.value})}}
      
            />
            </div>
              </div>
              <br></br>
          <button className="btn btn-primary" type="submit">Save changes</button>
          </form>
            {/* <EditForm theEmployee={employee} /> */}
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
        </Modal.Footer>
    </Modal>
    </>);
}

export default EditProjects;