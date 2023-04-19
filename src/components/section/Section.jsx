import React from "react";
import Table from "react-bootstrap/Table";

function StripedColumnsExample({ users }) {
  console.log(users);
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>ID</th>
        </tr>
      </thead>

      {users.map((elem) => (
        <tbody>
          <tr>
            <td>{elem.name}</td>
            <td>{elem.lastName}</td>
            <td>{elem.age}</td>
            <td>{elem.id}</td>
          </tr>
          ;
        </tbody>
      ))}
    </Table>
  );
}

export default StripedColumnsExample;
