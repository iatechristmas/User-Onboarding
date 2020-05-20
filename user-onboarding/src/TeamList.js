import React from "react";

const TeamList = (props) => {
  const { details, deleteUser } = props;

  if (!details) {
    return <h3>Waiting for friends to be added</h3>;
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>TOS Accepted</p>
      <button onClick={() => deleteUser(details.id)}>remove</button>
    </div>
  );
};

export default TeamList;
