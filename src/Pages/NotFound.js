import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <h3>
        <Link to="/">Home Page</Link>
      </h3>
    </>
  );
}

export default NotFound;
