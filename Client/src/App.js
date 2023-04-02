import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import {useEffect} from 'react';
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from './routing/PrivateRoute';

import MainPage from "./pages/MainPage";
import Search from "./pages/Search";
import CV from "./components/profile/cv";
import Profile from "./components/profile/profile";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/addJob"; 
import About from "./pages/About";
import Payment from "./pages/Payment";
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'
if(localStorage.token)
{
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);
  return (
    <Provider store={store}>
    <><div className="App">
      
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          
          <Route path="main" element={<PrivateRoute component={MainPage} />}/>
            <Route path="search" element={<Search />}/>
            <Route path="/jobdetails/:job_id" element={<JobPage/>}/>
            <Route path ="viewProfile/:user_id" element={<Profile/>}/>
            <Route path="profile" element={<PrivateRoute component={CV} />}/>
            <Route path="addJob" element={<AddJobPage/>}/>
            <Route path="aboutus" element={<About/>}/>
            <Route path="payment" element={<Payment/>}/>
        </Routes>
      </div></>
      </Provider>
  );
  
}

export default App;
