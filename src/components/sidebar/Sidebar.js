import React from "react";
import "./sidebar.css";
import { sidebarIcon } from "./sidebarIcon";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const nameChange = (str) => {
    setSelectedCategory(str);
  };
  return (
    <div className="sidebar__header">
      {sidebarIcon.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div
              className="sidebar__inner"
              onClick={() => nameChange(item.name)}
              style={{
                background: selectedCategory == item.name ? "#46444473" : "",
              }}
            >
              <button className="btn__sidebar one" type="button">
                {item.icon}
              </button>
              <button className="btn__sidebar" type="button">
                {item.name}
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Sidebar;
