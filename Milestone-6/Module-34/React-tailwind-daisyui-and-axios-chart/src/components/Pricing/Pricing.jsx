import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-2.5'>
            {/* <PricingCard></PricingCard> */}
            {
                pricingData.map(data => <PricingCard data={data}></PricingCard>)
            }
        </div>
    );
};

export default Pricing;