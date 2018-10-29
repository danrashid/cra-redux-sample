import React from "react";
import { Link } from "react-router-dom";

export default ({ thing: { id, name, stuff } }) => (
  <div>
    <h2>{name}</h2>
    <p>{stuff}</p>
    <Link to={`/things/${id}/edit`}>Edit this Thing</Link>
  </div>
);
