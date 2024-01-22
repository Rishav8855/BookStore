// src/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="Home">
        Home
      </Link>
      <Link to="/add" className="Add-book">
        Add Book
      </Link>
    </nav>
  );
};

export default Navigation;
