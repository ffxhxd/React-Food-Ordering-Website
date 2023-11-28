import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
//import "./header.scss";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { FaWifi } from "react-icons/fa";
import { MdOutlineWifiOff } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const isOnline = useOnlineStatus();

  //selector : it is nothing but a hook inside react, it will give us access to the store,,,, here we are subscribing to the store using selector
  //we are subcrinbing to small portioon of  store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="main-nav" role="nav-bar">
      <div className="logo">
        <IoFastFoodOutline size={50} />
      </div>

      <div className={toggle ? "mobile" : "menu-link"}>
        <ul className="nav-ul res">
          <li className="nav-li online">
            Online Status :{" "}
            {isOnline ? (
              <FaWifi
                size={22}
                style={{ color: "green" }}
                className="wifiicon"
              />
            ) : (
              <MdOutlineWifiOff
                size={22}
                style={{ color: "red" }}
                className="wifiicon"
              />
            )}
          </li>
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
            <li className="nav-li">Cart ({cartItems.length} items)</li>
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
