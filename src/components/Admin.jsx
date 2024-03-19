import React from "react";
import User from "./User";

function Admin({ users, removeUser }) {
  return (
    <table className="table-for-admin">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Created time</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} removeUser={removeUser} />
        ))}
      </tbody>
    </table>
  );
}

export default Admin;
