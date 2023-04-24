import React,{useState,useEffect} from 'react';
import Navbar from './partials/navbar'
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import axios, * as others from 'axios';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../components/layout/Alert';
// const axios = require('axios');
// import Input from './formComponents/inputComponents'
// import Button from './formComponents/buttonComponent'
// import Imag from './formComponents/imageComponent'
function Login({login,isAuthenticated}){
    const navigate = useNavigate();
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
          document.body.style.justifyContent='center';
          document.body.style.alignItems='center';
          document.body.style.display='flex';
          return () => {
            // 👇 optionally remove styles when component unmounts
            document.body.style.backgroundColor = null;
          document.body.style.justifyContent=null;
          document.body.style.alignItems=null;
          document.body.style.display=null;
            document.body.classList.remove('#d5eafc');
          };
        }, []);


        const [userLogin,setUserLogin]=useState({
            email:"",
            password:""
    });
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [fetchLoginData,setFetchLoginData]=useState({});
        function handleInput(e){
            const name=e.target.name;
            const value=e.target.value;
            setUserLogin({...userLogin,[name]:value})
            //console.log(value)
        }
        const {email,password}=userLogin;
        function handleSubmit(e)
        {
            e.preventDefault();
            
            setFormErrors(formValidation(userLogin));
            console.log(userLogin.email);
            login(userLogin.email,userLogin.password);
            setIsSubmit(true);
          

        }

        useEffect(() => {
         if(isAuthenticated)
            {
                setFormErrors({});
                // return <Navigate to="/main" />;
                navigate('/main');
            }
        },[]);
    
        const formValidation=(temp)=>{
            const errors={};
            if(!temp.email){
                errors.email="**email is required!"
            }
            else if(temp.email.length<=3)
            {
                errors.email="**email must be atleast 4 characters long!"
            }
            if(!temp.password){
                errors.password="**Password is required!"
            }
            return errors;
        }

        
              
              

          
//     useEffect(()=>{
//         async function foo(){
//         try{
//             const config={
//               headers:{
//                 'Content-Type':'application/json'
    
//               }}
//               const body=JSON.stringify(fetchLoginData);
//               const res=await axios.post('http://localhost:5000/api/users',body,config)
//         .then(resp=>{
//             const data=resp.data;
//             console.log(data);
//             if(Object.keys(formErrors).length===0 && isSubmit)
//         {
            
//             console.log(userLogin);
//             if(isAuthenticated){
//                 setFormErrors({});
//                 history("/main",{state:{email:userLogin.email}});
//             }
//             else{
//                 const errors={};
//                     errors.email="Incorrect email or password"
//                     setFormErrors(errors);
                
                
//             }
//         }
//         })
//         console.log(res.data);
//     }
//     catch(err){

//     }
//     }
//     foo();
// },[formErrors]);
 return (<>
{/* <div className="container login-container">
         <div className="col-0 col-sm-6 col-md-7 login-image-container">
        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1667047160~exp=1667047760~hmac=2abc162899e8144402880928dc0b1c3d738338506bbb0967c41019753be1dbb6" alt="" />
        </div> 
        <div className="container"> */}
        <Navbar/>
<section className="vh-100">
 
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
      <img src="images\login3.svg" className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <Alert/>
          <form onSubmit={handleSubmit} id="loginForm" className="login-form">
            <div className="h4 login-title">Sign In to Gratis Agency</div>
            <div className="field">
              <label className="label">email :</label>
              <div className="control has-icons-left has-icons-right">
                <input onChange={handleInput} value={userLogin.email} className="input user-name-input" type="text" name="email" placeholder="Enter email" id="loginemail"/>
                <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
            </div>
            
            
            <label htmlFor="" className="emailErrorLabel"><small id="small2" className="text-danger">{formErrors.email}</small></label>
            </div>

            <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
                <input onChange={handleInput} value={userLogin.password} className="input password-input" type="password" name="password" placeholder="Enter Password" id="loginPassword"/>
                <span className="icon is-small is-left"><i className="fas fa-unlock"></i></span>
</div>

    <label htmlFor="" className="passwordErrorLabel"><small id="small2" className="text-danger">{formErrors.password}</small></label>
            </div>

            <input type="submit" value="Login"  style={{backgroundColor:"burlywood"}}
            className="btn shadow" />
            <p className="redirect">
            Not a user yet? <Link to="/signUp" style={{color:'lightseagreen'}}>Sign Up </Link>Here.
            </p>
        </form>
        </div>
    </div>
    </div>


 {/* <div className="container login-container">
      <div className="row">
<div className="col-0 col-sm-6 col-md-7 login-image-container">
 <img  className="img-fluid"src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1665603368~exp=1665603968~hmac=7e55fbc272965e5690f06210a9a602fbe2f5895a957d1418fcd613d96898c0b2' alt=""/>
 </div>
 <div className="col-12 col-sm-6 col-md-5">

<form onSubmit={handleSubmit} className="sign-up-form" id="form">
<div className="h4 login-title">Sign In to Gratis Agency</div>
<div className="field">
    <label action="" className="label">email :</label>
    <div className="control has-icons-left has-icons-right">
    <input onChange={handleInput} value={userLogin.email} autoComplete="off" name="email" className="input" type="text" placeholder="Enter email" id="email" />
    <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
    </div>
    <small id="small2" className="text-danger">{formErrors.email}</small>
    </div>
    
    <div className="field">
    <label className="label">Password :</label>
    <div className="control has-icons-left has-icons-right">
    <input onChange={handleInput} value={userLogin.password} autoComplete="off" name="password" className="input" type="password" placeholder="Enter password" id="password" />
    <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
    </div>
    <small id="small2" className="text-danger">{formErrors.password}</small>
    </div>

 

<br></br>
<button style={{backgroundColor:"burlywood"}}
            className="btn shadow" type="submit" >Login</button>
 </form>

 </div></div>
 </div> */}
 </section>
 </>
)
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { login })(Login);