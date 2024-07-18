import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const btnId = `filter-btn-${index + 1}`;
        // console.log(btnId);
        return (
          <button
            type="button"
            className="filter-btn"
            id={btnId} // Assigning btnId to the button's id attribute
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
