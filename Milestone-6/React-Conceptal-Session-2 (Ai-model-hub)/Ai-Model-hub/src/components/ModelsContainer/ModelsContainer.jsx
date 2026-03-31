import React from 'react';
import ModelCard from '../ModelCard/ModelCard';

const ModelsContainer = ({models, cartItem, setCartItem}) => {
    return (
        <div className='space-y-10 mb-20'>
            <div className='text-center space-y-5 '>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className='text-gray-600 text-xl'>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className='grid grid-cols-3 gap-8 w-10/12 mx-auto'>
                {models.map(model => <ModelCard key={model.id} model={model} cartItem={cartItem} setCartItem={setCartItem}></ModelCard>)}
            </div>
        </div>
    );
};

export default ModelsContainer;