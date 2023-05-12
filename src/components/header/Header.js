import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./header.css";

const Header = ({ menuHandler }) => {
  // dark-mode function
  const [active, setActive] = useState(false);
  const sunChange = () => {
    setActive(!active);
  };

  //form-responsive-search
  const [searchActive, setSearchActive] = useState(false);

  const searchHandler = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className="header__section">
      <div className="header__logo">
        <div style={{ marginRight: "15px" }}>
          <button
            style={{
              color: "white",
              background: "transparent",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
            }}
            type="button"
            onClick={menuHandler}
          >
            <HiOutlineMenuAlt2 />
          </button>
        </div>
        <h2 style={{ marginBottom: "5px" }}>
          BestKino<span style={{ color: "#4dff71f0" }}>.Net</span>
        </h2>
      </div>

      <form className="form">
        <input className="form__input" type="text" placeholder="Qidiruv....." />
        <button type="submit" className="search__button">
          <SearchRoundedIcon style={{ color: "#ffff" }} />
        </button>
      </form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="header__toggle first">
          <BsSearch
            style={{ color: "#fff", fontSize: "23px" }}
            onClick={searchHandler}
          />
        </button>
        <button className="header__toggle" onClick={sunChange}>
          {active ? (
            <NightsStayOutlinedIcon />
          ) : (
            <LightModeRoundedIcon style={{ color: "#fff" }} />
          )}
        </button>
        <button className="header__toggle second">
          <NotificationsNoneIcon style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
};

export default Header;
