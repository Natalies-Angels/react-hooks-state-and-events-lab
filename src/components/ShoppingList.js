import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) 
{
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(event)
  {
    setSelectedCategory(event.target.value)
  }

  // go through each item in the list.
  // check if each item's category is the same as the currently selected category.
  // If they are in the same category, the item will be displayed in the filtered list. Else it won't

  const filteredItems = selectedCategory === "All"? items : items.filter(item => item.category === selectedCategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
