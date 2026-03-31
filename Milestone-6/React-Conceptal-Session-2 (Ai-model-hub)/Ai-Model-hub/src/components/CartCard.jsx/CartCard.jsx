import React from 'react';

const CartCard = ({item, deleteItem}) => {
    return (
        <div className='flex justify-between bg-gray-200/50 p-4 shadow-sm gap-5 rounded-2xl'>
  {/* Image - fixed width, won't shrink */}
  <div className='rounded-2xl p-3 w-30 h-30 bg-white shrink-0'>
    <img className='h-25 w-25 object-contain' src={item.image} alt="" />
  </div>

  {/* Middle section - NO large gap here */}
  <div className='flex justify-between items-center flex-1 min-w-0 gap-2'>  {/* Changed: gap-7 to gap-3 */}
    
    {/* Left text area - THIS NEEDS TO TAKE MORE SPACE */}
    <div className='min-w-0 flex-1'>
      <h2 className='text-2xl font-bold mb-2 truncate'>{item.title}</h2>  {/* Added: truncate */}
      <p className='text-gray-400 line-clamp-2'>{item.description}</p>
    </div>

    {/* Price - keep it compact */}
    <div className='shrink-0 text-right'>
      <h2 className='text-xl font-bold whitespace-nowrap'>${item.price}</h2>  {/* Changed: text-3xl to text-xl */}
      <p className='whitespace-nowrap text-gray-600 text-sm'>per month</p>
    </div>
  </div>

  {/* Close button */}
  <button onClick={()=>deleteItem(item.id)} className='text-xl mr-1.5 text-gray-700 cursor-pointer shrink-0'>X</button>
</div>
    );
};

export default CartCard;