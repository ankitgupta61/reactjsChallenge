import React from 'react'
import FoodData from './components/FoodData'
import { useState } from 'react'
import AllFoodItem from './components/AllFoodItem';

const App = () => {
  const [foodDataDisplay, setFoodDataDisplay] = useState(true);
  return (
    <div>
      <button onClick={()=>setFoodDataDisplay(true)}>FoodData</button>
      <button onClick={()=>setFoodDataDisplay(false)}>AllFoodItems</button>
      {foodDataDisplay ? <FoodData/> : <AllFoodItem/>}
      </div>
  )
}

export default App
