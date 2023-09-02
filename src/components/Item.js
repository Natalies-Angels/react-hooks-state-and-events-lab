import React, { useState } from "react";

function Item({ name, category })
 {
  const[inCart, setCart] = useState([]);
  function Cart()
  {
    setCart((inCart) => !inCart)
  }

  const added = inCart ? "" : "in-cart"
  const color = inCart? "" : "purple"
  return (
    <li className={added}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background:color}} className="add" onClick={Cart}>{inCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
