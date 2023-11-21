import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>All Articles</li>
          <li>My Articles</li>
          <li>Profile</li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
