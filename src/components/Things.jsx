import React from "react";
import { Link } from "react-router-dom";

export default ({ things }) => (
  <div>
    <h2>All Things</h2>
    <ul>
      {things.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/things/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/things/add">Add a Thing</Link>
  </div>
);
