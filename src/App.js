import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from './data';

const allCategories = ['All',...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories)


  const filterItems = (category) => {
    if (category === 'All') {
     return setMenuItems(items);
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-full">
        <div className="flex justify-center my-20">
          <h1 className="text-5xl font-bold text-sky-950 border-b-4 border-[#c59d5f]">Our Menu</h1>
        </div>
        <div className="flex justify-center mb-20">
          <Categories categories={categories} filterItems={filterItems}/>
        </div>
        <div className="px-10">
          <Menu items={menuItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
