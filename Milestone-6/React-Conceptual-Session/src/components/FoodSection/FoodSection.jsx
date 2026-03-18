import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import "./FoodSection.css"
import Cart from "../Cart/Cart"

const FoodSection = ({foodDataRes}) => {
    const foodData = use(foodDataRes)
    const foods = foodData.meals    
    const [cart,setCart] = useState([])
    const addToCart = (food)=> {
        const newCart = [...cart, food]
        setCart(newCart)
    }
    return (
        <div className='foodsSection'>
            <div className="foodsContainer">
                {
                    foods.map(food => 
                         <SingleFood addToCart={addToCart} food={food} key={food.idMeal}></SingleFood>
                    )
                }
            </div>
            <div className='cartsContainer'>
                {
                    cart.map(item => <Cart key={item.idMeal} item={item}></Cart>)
                }
                {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    );
};

export default FoodSection;