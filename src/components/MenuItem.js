import React from "react";
import { items } from "./Data";

const MenuItem = (props) => {
  const categoryTestId = `menu-item-${props.menuItem.category
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  console.log(categoryTestId);

  // Render a single menu item
  if (props.menuItem.title.length >= 1) {
    return (
      <div>
        <article className="menu-item" data-test-id={categoryTestId}>
          <img
            src={props.menuItem.img}
            className="photo"
            alt={props.menuItem.title}
          />
          <div className="item-info">
            <header>
              <h4>{props.menuItem.title}</h4>
              <h4 className="price">${props.menuItem.price}</h4>
            </header>
            <p className="item-text">{props.menuItem.desc}</p>
          </div>
        </article>
      </div>
    );
  } else {
    // Render all menu items
    return (
      <div>
        {items.map((item) => (
          <article
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <img src={item.img} className="photo" alt={item.title} />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }
};

export default MenuItem;
