import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
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
