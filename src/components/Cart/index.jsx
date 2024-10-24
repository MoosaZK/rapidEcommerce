import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '@/store/slice/cartSlice'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import Image from 'next/image';

export default function CartComponent() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); 
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(adjustQuantity({ id, quantity: parseInt(quantity) }));
  };

  return (
    <div className="container p-4 mx-auto mt-16 md:mt-28">
      <h1 className="mb-4 text-2xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <AnimatePresence> 
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                layout  
                className="flex items-center justify-between p-2 border-b"
              >
                <div className="flex items-center">
                  <Image src={item.images[0]} width={40} height={40} alt={item.title} className="object-cover w-20 h-20 mr-4" />
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="w-16 mx-2 text-center border border-gray-400"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mt-4">
            <h2 className="font-bold">Total Quantity: {totalQuantity}</h2>
            <h2 className="font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
