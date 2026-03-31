import React, { use, useState } from 'react';
import ModelsContainer from '../ModelsContainer/ModelsContainer';
import CartContainer from '../CartContainer/CartContainer';

const Models = ({modelPromise}) => {
    const models = use(modelPromise) 
    const [handleTab, setHandleTab] = useState("ModelsContainer")
    const [cartItem, setCartItem] = useState([])
    
    return (
        <div className=''>
            <div className='flex justify-center gap-10 my-12'>
                <button onClick={()=>setHandleTab("ModelsContainer")} className={handleTab==="ModelsContainer"? "btn bg-linear-to-r from-red-600 to-orange-400 text-white text-lg rounded-3xl px-15 py-5 cursor-pointer" : "cursor-pointer  px-15 py-5 rounded-3xl shadow-sm btn"}>Models</button>
                <button onClick={()=>setHandleTab("Cart")} className={handleTab==="Cart"? "btn bg-linear-to-r from-red-600 to-orange-400 text-white text-lg rounded-3xl px-15 py-5 cursor-pointer" : "cursor-pointer px-15 py-5 rounded-3xl shadow-sm btn"}>Cart ({cartItem.length})</button>
            </div>
            {handleTab === "ModelsContainer"? <ModelsContainer models={models} cartItem={cartItem} setCartItem={setCartItem}></ModelsContainer> 
            : <CartContainer cartItem={cartItem} setCartItem={setCartItem}></CartContainer>}
        </div>
    );
};

export default Models;