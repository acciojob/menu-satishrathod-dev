import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div>
      <div className="section-center">
        {items.map((menuItem, index) => {
          return <MenuItem menuItem={menuItem} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
