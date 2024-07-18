// import React, { useEffect, useState } from "react";
// import { items } from "./Data";
// import Categories from "./Categories";
// import Menu from "./Menu";
// import "./App.css";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   //   console.log(menuItems);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   //   useEffect(() => {
//   //     async function getData() {
//   //       let d = await items;
//   //       setMenuItems([d]);
//   //     }
//   //   }, []);

//   return (
//     <main id="main">
//       <section className="menu section">
//         <div className="title">
//           <h2>Our Menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;

import React from "react";
import Menu from "./Menu.js";

function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
