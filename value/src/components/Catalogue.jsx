import React from 'react';
import Sets from '../utils/Sets';
import { useState } from 'react';


const Catalogue = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (set) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, set];
      console.log('Cart:', newCart);
      return newCart;
    });
  };
 
  return (
    <div className="container mx-auto px-4 min-h-screen py-20 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Sets.map((set, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={set.image} alt={set.name} />
          <div className="p-4">
            <h2 className="text-gray-800 text-lg font-semibold">{set.name}</h2>
            <button onClick={()=>addToCart(set)} className='bg-pink-400 px-2 py-2 rounded-md'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
   
  </div>
  );
};

export default Catalogue;