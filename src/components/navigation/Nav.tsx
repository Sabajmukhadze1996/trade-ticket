import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { FaOpencart } from "react-icons/fa";
import MainSearchModal from "../../modals/main-search-modal/MainSearchModal";

const Nav = () => {

  // for search pop up menu
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav id="nav">
      <MainSearchModal open={open} handleClose={handleClose} />
      <div className="nav-inner-container">
        <NavLink to="/" className="nav-logo">
          TradeTKT
        </NavLink>
        <div className="nav-bar-lists-container">
          <p><NavLink to="/">HOME</NavLink></p>
          <p onClick={handleOpen}>SEARCH</p>
          <p><NavLink to="/news">NEWS</NavLink></p>
          <p>ABOUT</p>
          <p>CONTACT</p>
          <button>
            <span className="cart-count">0</span>
            <FaOpencart />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
