import React from "react";
import ReactDOM from "react-dom";
import { IoFastFoodOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <IoFastFoodOutline size={70} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
