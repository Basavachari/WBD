import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

function EditAvatar({ auth: { user } }) {
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [avatarShow, setAvatarShow] = useState(false);
  const [avatarImg, setAvatarImg] = useState(user.avatar);

  const showAvatar = () => setAvatarShow(true);
  const handleAvatarClose = () => {
    setAvatarShow(false);
    setAvatarFile(null);
    setAvatarPreview(user.avatar);
  };

  useEffect(() => {
    setTimeout(() => {
      const img = new Image();
      img.src = require(`./uploads/${avatarImg}`);
      img.onload = () => {
        setAvatarPreview(img.src);
      };
      img.onerror = () => {
        setAvatarPreview(require('./uploads/1679758942057.png'));
      };
    }, 3000);
  }, [avatarImg]);

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
    setAvatarPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    await fetch(`http://localhost:5000/api/profile/avatar/${user._id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setAvatarImg(data.avatar);
        handleAvatarClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id={`tooltip-top`}>
            Edit
          </Tooltip>
        }
      >
        <button onClick={showAvatar} className="avatar-button">
          <img
            src={avatarPreview}
            className="img-fluid img-thumbnail shadowless avatar-img"
            alt="Avatar"
          />
        </button>
      </OverlayTrigger>
      <Modal show={avatarShow} onHide={handleAvatarClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Avatar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAvatarSubmit}>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <br />
            <img
              src={avatarPreview}
              className="img-fluid img-thumbnail shadowless mt-3 avatar-img"
              alt="Avatar Preview"
            />
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAvatarClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

EditAvatar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(EditAvatar);
