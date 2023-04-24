import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Admin.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const AdminPage = ({ auth: { isAuthenticated }, setAlert, logout }) => {
  const [userList, setUserList] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/profile/users');
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      console.log(userId);
      await fetch(`http://localhost:5000/api/profile/users/${userId}`,{
        method: 'DELETE',
      });
      setUserList(userList.filter((user) => user.id !== userId));
      setAlerts(['User Removed']);
      setTimeout(() => {
        setAlerts([]);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers()
    //console.log(user.username)
  }, [userList]);

  return (
    <div className="admin-page-container">
      <nav className="level is-mobile">
        <div className="level-right">
          <Link className="level-item" onClick={logout} to="/">
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <span className="hide-sm">Logout</span>
          </Link>
          <span className="level-item">
            <span className="icon">
              <i className="fas fa-user-shield"></i>
            </span>
          </span>
        </div>
      </nav>
      <h2>Users</h2>
      <div className="alert-wrapper">
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-success`}>
            {alert}
          </div>
        ))}
      </div>
      <ul className="user-list">
        {userList.map((user) => (
          <li key={user._id} className="user-item">
            <div className="user-details">
              <p className="username">{user.username}</p>
              <p className="email">{user.email}</p>
            </div>
            <button onClick={() => deleteUser(user._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

AdminPage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AdminPage);
