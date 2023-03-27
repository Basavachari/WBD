import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header' style={{marginTop:'-5px'}}>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories 
            </h4>
          </div>

          <div className='navlink'>
          <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/main'>home</Link>
              </li>
              {/* <li>
                <Link to=''>pages</Link>
              </li> */}
              <li>
                <Link to=''>User account</Link>
              </li>
              <li>
                <Link to=''>FAQ</Link>
              </li>
              <li>
                <Link to=''>contact</Link>
              </li>
              <li>
              <Link onClick={logout} to='/'>
              <i className="fas fa-sign-out-alt" />{' '}
              <span className="hide-sm">Logout</span>
              </Link>
                {/* <Link onClick={()=>{localStorage.removeItem('token');}} to='/'>Log out</Link> */}
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
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
