import React,{useState,useEffect} from 'react'

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
function EditEducation({Data,setData})
{
    const [academicData,setAcademicData]=useState({
        college:{
          name:Data.academic.college.name,
          passingYear:Data.academic.college.passingYear,
          qualification:Data.academic.college.qualification
          },
          school:{
          name:Data.academic.school.name,
          passingYear:Data.academic.school.passingYear,
          qualification:Data.academic.school.qualification
          }
      
       })
       const [academicShow, setAcademicShow] = useState(false);
       const showAcademic = () => setAcademicShow(true);
       const handleAcademicClose = () => {
        setAcademicShow(false);
        setAcademicData({
          college: {
            name: Data.academic.college.name,
            passingYear: Data.academic.college.passingYear,
            qualification: Data.academic.college.qualification,
          },
          school: {
            name: Data.academic.school.name,
            passingYear: Data.academic.school.passingYear,
            qualification: Data.academic.school.qualification,
          },
        });
      };
      useEffect(() => {
        handleAcademicClose();
      }, [Data]);
       function handleAcademicSubmit(e){
        e.preventDefault();
        setData({ ...Data,academic:{...Data.academic,college:{...Data.academic.college,name:academicData.college.name,passingYear:academicData.college.passingYear,qualification:academicData.college.qualification},school:{...Data.academic.school,name:academicData.school.name,passingYear:academicData.school.passingYear,qualification:academicData.school.qualification}}})
        handleAcademicClose();
         }
    return (<>
    <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={showAcademic} style={{backgroundColor:"white",border:"white"}} data-toggle="modal"><i className="fa fa-edit" style={{fontSize:"20px", marginLeft:'5px'}}></i></button>
                </OverlayTrigger>
                <Modal show={academicShow} onHide={handleAcademicClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Academic Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAcademicSubmit}>
          <div>
              <div className="container ">
            <label className="label" htmlFor="mobile">College/University</label>
            <div className="field">
              
            <input
              type="text"
              id="college"
              name="college"
              className="input"
              value={academicData.college.name}
               onChange={(event) =>{
                setAcademicData({ ...academicData,college:{...academicData.college,name:event.target.value}})}}
         
            />
            </div>

            
            </div>
             {/* <small >{errors.mobileErrors}</small> */}
             <div className="container">
            <label className="label" htmlFor="passingYear">Passing Year</label>
            <div className="field">
            <input
              type="month"
              id="passingYear"
              name="passingYear"
              value={academicData.college.passingYear}
              className="input"
              onChange={(event) =>{
                setAcademicData({ ...academicData,college:{...academicData.college,passingYear:event.target.value}})}}
        
            />
            </div>
          
            
            </div>
            <div className="container">
            <label className="label" htmlFor="qualification">Qualification</label>
            <div className="field">
            <input
              type="text"
              id="qualification"
              value={academicData.college.qualification}
              name="qualification"
              className="input"
              onChange={(event) =>{
                setAcademicData({ ...academicData,college:{...academicData.college,qualification:event.target.value}})}}
          
            />
            </div>

            
            </div>
            </div>
            <hr></hr>
            <div>
              <div className="container ">
            <label className="label" htmlFor="mobile">College/University</label>
            <div className="field">
              
            <input
              type="text"
              id="college"
              name="college"
              value={academicData.school.name}
              className="input"
               onChange={(event) =>{
                setAcademicData({ ...academicData,school:{...academicData.school,name:event.target.value}})}}
         
            />
            </div>

            
            </div>
             {/* <small >{errors.mobileErrors}</small> */}
             <div className="container">
            <label className="label" htmlFor="passingYear">Passing Year</label>
            <div className="field">
            <input
              type="month"
              id="passingYear"
              name="passingYear"
              value={academicData.school.passingYear}
              className="input"
              onChange={(event) =>{
                setAcademicData({ ...academicData,school:{...academicData.school,passingYear:event.target.value}})}}
        
            />
            </div>
          
            
            </div>
            <div className="container">
            <label className="label" htmlFor="qualification">Qualification</label>
            <div className="field">
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={academicData.school.qualification}
              className="input"
              onChange={(event) =>{
                setAcademicData({ ...academicData,school:{...academicData.school,qualification:event.target.value}})}}
          
            />
            </div>

            
            </div>
            </div>
            <br></br>
          <button className="btn btn-primary" type="submit">Save changes</button>
          </form>
            {/* <EditForm theEmployee={employee} /> */}
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleAcademicClose}>
                    Close
                </Button>
        </Modal.Footer>
    </Modal>
    </>);
}
export default EditEducation;