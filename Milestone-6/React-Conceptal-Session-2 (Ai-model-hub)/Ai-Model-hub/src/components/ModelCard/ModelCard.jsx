import React, { useState } from "react";

const ModelCard = ({ model, cartItem, setCartItem }) => {
    const [isSubscribed, setIsSubscribed] = useState(false)   
    const handleSubscription = () => {
        setIsSubscribed(!isSubscribed)
        setCartItem([...cartItem, model])
    }    

  return (
    <div className="shadow-sm rounded-2xl p-4 flex flex-col">
      <div className="grow">
        <div className="h-50 mb-4 flex justify-center items-center bg-gray-300/50 rounded-2xl">
          <img className="h-40 w-40 object-contain" src={model.image} alt="" />
        </div>
        <h2 className="font-semibold text-2xl mb-3">{model.title}</h2>
        <p className="text-sm text-gray-400 mb-5">{model.description}</p>
        <h2 className="font-bold text-2xl mb-5">${model.price}<span className="text-lg text-gray-600">/month</span></h2>
      </div>
      <button onClick={handleSubscription} className="btn border-none bg-red-600 text-white cursor-pointer rounded-2xl w-full text-xl py-7 shadow-[0_5px_7px_rgba(255,0,0,0.4)]">
        {isSubscribed? "Subscribed": "Subscribe Now"}
      </button>
    </div>
  );
};

export default ModelCard;
