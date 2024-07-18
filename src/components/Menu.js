import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div>
      <div className="section-center">
        {items.map((menuItem) => {
          return <MenuItem key={menuItem.id} {...menuItem} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
