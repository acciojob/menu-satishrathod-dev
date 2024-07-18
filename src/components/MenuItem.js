import React from "react";

const MenuItem = (props) => {
  const categoryTestId = `menu-item-${props.menuItem.category
    .toLowerCase()
    .replace(" ", "-")}`;
  console.log(categoryTestId);
  if (props.menuItem.title.length >= 1) {
    return (
      <div>
        <article className="menu-item" data-test-id={categoryTestId}>
          <img src={props.menuItem.img} className="photo" />
          <div className="item-info">
            <header>
              <h4 className="price">${props.menuItem.price}</h4>
            </header>
            <p className="item-text">{props.menuItem.desc}</p>
          </div>
        </article>
      </div>
    );
  } else {
    return <h2>Please wait...</h2>;
  }
};

export default MenuItem;
