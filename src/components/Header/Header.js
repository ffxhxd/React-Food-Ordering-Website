import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="main-nav">
      <div className="logo">
        <IoFastFoodOutline size={50} />
      </div>

      <div className={toggle ? "mobile" : "menu-link"}>
        <ul className="nav-ul res">
          <Link to="/">
            <li className="nav-li">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-li">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-li">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="nav-li">Cart</li>
          </Link>
        </ul>
      </div>

      <div className="hamburger-menu">
        {toggle ? (
          <RxCross2 size={30} onClick={() => setToggle(!toggle)} />
        ) : (
          <GiHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
        )}
      </div>
    </nav>
  );
};

export default Header;

{
  /* <div className="header">
      <div className="logo-container">
        <IoFastFoodOutline size={70} />
      </div>
      <div className="nav-items">
        <ul className="nav-ul res">
          <Link to="/">
            <li className="nav-li">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-li">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-li">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="nav-li">Cart</li>
          </Link>
        </ul>
      </div>
    </div> */
}
