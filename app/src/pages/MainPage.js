import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Header from "../common/header/Header"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Footer from '../common/footer/Footer'
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
// import Job_carts from "../components/search/Job_carts"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Admin from './Admin/Admin'

import "./mainpage.css"
import { getCurrentProfile } from '../actions/profile';
import Mybids from '../components/mybids/Mybids.jsx'
import JobDeals from "../components/jobs/JobDeals"
const MainPage = ({
  getCurrentProfile,  
  deleteAccount,
  auth: { user }
}) => {
  useEffect(() => {
    //getCurrentProfile();
  }, [getCurrentProfile]);
  return (

    <>
      {
        user && user.email === "g@gmail.com" ? (
          // 1===1 ?(
          <Admin />
        )
          : (
            <>
              <Header />
              <Home />
              {/* <Job_carts/> */}
              <FlashDeals />
              <JobDeals />
              <Mybids />
              {/* <NewArrivals /> */}


              {/* <Annocument /> */}
              <Wrapper />
              <Footer />
            </>

          )
      }
    </>

  )
}

MainPage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  MainPage
);
