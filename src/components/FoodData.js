import React from 'react'
import { useState, useEffect } from 'react'

var key = 0;

const FoodData = () => {
    const [foodName, setFoodName] = useState("");
    const [foodType, setFoodType] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        
        localStorage.setItem(`${key++}`, JSON.stringify(data));
        console.log()
      }, [data]);
  return (
    <div>
        <center>
        <h1>Food App</h1>
        <form>
            <label for="fName">Food Name: </label>
            <input type='text' id="fanme" value={foodName} onChange={(e)=>setFoodName(e.target.Value)} /><br/>
            <label for="fType">Food Type </label>
            <select id="fType" onChange={(e)=>setFoodType(e.target.value)}>
                <option type="default">Select Food Type</option>
                <option>Delicious Food</option>
                <option>Nutritious Food</option>
                <option>Fast Food</option>
                <option>Beverages</option>
                <option>Desserts</option>
            </select>
            <br />
            <label for="maxDeliveryTime">Max Deliver Time </label>
            <input type='number' id='maxDeliveryTime' value={deliveryTime} onChange={(e)=>setDeliveryTime(e.target.value)} /><br/><br/>
            <button type='button'onClick={()=>{
                setData({foodName : foodName, foodType : foodType, deliveryTime : deliveryTime})
                setFoodName("");
                setDeliveryTime("");
            }
                }>Submit</button>
        </form>
        </center>
    </div>
  )
}

export default FoodData