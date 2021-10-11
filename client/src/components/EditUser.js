import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateusers } from "../JS/userSlice/UserSlice";
const EditUser = ({ us, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setuser] = useState({
    name: "",
    age: "",
    email: "",
    image: "",
  });
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update user</Modal.Title>
        </Modal.Header>
        <Modal.Body className='inps'>
          <input
            type='text'
            placeholder='add the name of user'
            onChange={(e) => setuser({ ...user, name: e.target.value })}
          />
          <input
            type='email'
            placeholder='add the email of user'
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
          <input
            type='number'
            placeholder='add the age of user'
            onChange={(e) => setuser({ ...user, age: e.target.value })}
          />
          <input
            type='text'
            placeholder='add the image of user'
            onChange={(e) => setuser({ ...user, image: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              dispatch(updateusers({ id: us._id, user }));
              handleClose();
              setping(!ping);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
