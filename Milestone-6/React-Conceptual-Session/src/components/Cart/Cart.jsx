import React from 'react';

const Cart = ({item}) => {
    console.log(item);
    
    return (
        <div>
            <h2>{item.strMeal} </h2>
        </div>
    );
};

export default Cart;