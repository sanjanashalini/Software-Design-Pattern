import React from 'react';

const Cart = ({ cart = [] }) => {
  console.log('Cart Component Rendered with cart:', cart);

  return (
    <div id="cart" className="container mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;