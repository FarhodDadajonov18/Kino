import React from "react";
import { categoryIcon } from "./categoryIcon";
import "./navbar.css";
const CategoryButton = () => {
  return (
    <div className="category__button">
      {categoryIcon.map((item, idx) => {
        return (
          <div key={idx}>
            <button className="category__btn">{item.name}</button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryButton;
