import React, { useState } from "react";
import { items as data } from "./Data";
// import MenuItem from "./MenuItem";

// const Menu = ({ items }) => {
//   return (
//     <div>
//       <div className="section-center">
//         {items.map((menuItem, index) => {
//           return <MenuItem menuItem={menuItem} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Menu;

const Menu = () => {
  let [dishes, setDishes] = useState(data);

  function handleCategories(e) {
    if (e.target.innerText === "All") {
      setDishes(data);
      return;
    }
    if (e.target.innerText === "Breakfast") {
      setDishes(data.filter((food) => food.category === "breakfast"));
      return;
    }
    if (e.target.innerText === "Lunch") {
      setDishes(data.filter((food) => food.category === "lunch"));
      return;
    }
    if (e.target.innerText === "Shakes") {
      setDishes(data.filter((food) => food.category === "shakes"));
      return;
    }
  }

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <p onClick={handleCategories}>All</p>
      <p id="filter-btn-1" onClick={handleCategories}>
        Breakfast
      </p>
      <p id="filter-btn-2" onClick={handleCategories}>
        Lunch
      </p>
      <p id="filter-btn-3" onClick={handleCategories}>
        Shakes
      </p>

      {dishes.map((food) =>
        food.category == "shakes" ? (
          <div data-test-id="menu-item-shakes">
            <img src={food.img} alt={food.title}></img>
            <h2>
              <span>{food.title}</span>{" "}
              <span className="price">{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : food.category == "lunch" ? (
          <div data-test-id="menu-item-lunch">
            <img src={food.img} alt={food.title}></img>
            <h2>
              <span>{food.title}</span>{" "}
              <span className="price">{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : food.category == "breakfast" ? (
          <div data-test-id="menu-item-breakfast">
            <img src={food.img} alt={food.title}></img>
            <h2>
              <span>{food.title}</span>{" "}
              <span className="price">{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : (
          <div>
            <img src={food.img} alt={food.title}></img>
            <h2>
              <span>{food.title}</span>{" "}
              <span className="price">{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
