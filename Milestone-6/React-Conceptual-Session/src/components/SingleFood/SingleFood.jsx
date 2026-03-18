import React from 'react';
import "./SingleFood.css"

const SingleFood = ({addToCart, food}) => {
    return (
        <div className="card">
            <div className="image-frame">
                <img src={food.strMealThumb} alt="" />
            </div>

           <h2 className="title">{food.strMeal}</h2>
            
            {/* <div class="region">
            <span>Turkish grill</span>
            </div> */}

            <button onClick={()=>addToCart(food)} className="cart-btn" id="addBtn">
            <span className="cart-icon">🛒</span> Add to cart
            </button>

        </div>
    );
};

export default SingleFood;