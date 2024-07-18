import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div>
      <div className="section-center">
        {items.map((menuItem) => {
          return <MenuItem menuItem={menuItem} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
