import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UsersList = ({ ping, setping }) => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  return (
    <div className='userList'>
      {users ? (
        users.map((el) => <UserCard ping={ping} setping={setping} user={el} />)
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
};

export default UsersList;
