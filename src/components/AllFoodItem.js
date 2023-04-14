import React from 'react'
import { useEffect, useState } from 'react';
const AllFoodItem = () => {
    const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);
  return (
    <div>
        <h1>Food App</h1>
        {items.map((item,idx)=>{
            <div key={idx}>
            <p>{item.foodName}</p>
            <p>{item.foodType}</p>
            <p>{item.foodDeliveryTime}</p>
            </div>
        })}
    </div>
  )
}

export default AllFoodItem