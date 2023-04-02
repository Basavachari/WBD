import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from "../../components/assets/images/logofinal.svg"


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  // Toogle Menu
  // const [MobileMenu, setMobileMenu] = useState(false)
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
  return (
    <>
      <section className='search '>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to="/main">
            <img src={logo} alt='' />
            </Link>
          </div>
          <div className="boost">

          </div>
          <div className='search-box f_flex'>
          <Link to="/search">
            <i className='fa fa-search'></i>
            </Link>
            <input type='text' placeholder='What service are you looking for today?' />
          </div>
          {/* <div className="noti f_flex">
          <i className="fa  fa-light fa-bell icon-circle " style={{fontSize:'20px'}} ></i>
          </div>
          <div className="noti f_flex">
          <i className="fa fa-light fa-envelope icon-circle" ></i>
          </div> */}
          <div className='noti f_flex'>
          <Link to="/profile">
            <i className='fa fa-user icon-circle'></i>
            </Link>
            </div>
            <div className="noti f_flex">

<Link onClick={logout} to='/'>
              <i className="fa fa-sign-out-alt icon-circle"></i>
              </Link>
            </div>
          
          </div>
        {/* </div> */}
      </section>
    </>
  )
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
