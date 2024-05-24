import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/post">Post</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
