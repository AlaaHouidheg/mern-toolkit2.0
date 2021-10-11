import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteusers } from "../JS/userSlice/UserSlice";
import EditUser from "./EditUser";
const UserCard = ({ user, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "10rem" }}>
        <Card.Img variant='top' src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.age}</Card.Text>
          <EditUser us={user} ping={ping} setping={setping} />
          <Button
            variant='danger'
            onClick={() => {
              dispatch(deleteusers(user._id));
              setping(!ping);
            }}
          >
            delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
