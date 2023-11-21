import React from "react";
import "./Layout.css";
import { useState } from "react";

const Layout = ({ children }) => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <nav>
        <ul style={{ display: "flex", flexDirection: "row" }}>
          <li
            style={{
              listStyle: "none",
              backgroundColor: active === "all" ? "red" : "white",
            }}
          >
            All Articles
          </li>
          <li
            style={{ listStyle: "none" }}
            className={`${active === "my" ? "green" : ""}`}
          >
            My Articles
          </li>
          <li style={{ listStyle: "none" }}>Profile</li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
