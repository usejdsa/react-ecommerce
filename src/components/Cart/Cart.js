import React, { useEffect, useState } from 'react'

function Cart({ cart, RemoveItem, setCart, setItemNumber }) {
    const [orderPlaced, setOrderPlaced] = useState(false);

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });

    function placeOrder() {
        if (cart.length === 0) return;
        setOrderPlaced(true);
        setTimeout(() => setOrderPlaced(false), 3000);
        setCart([]);
        setItemNumber(0);
    }

    return (
        <div className='flex flex-col sm:px-10 px-4 py-10 gap-4 mb-32'>
            <h1 className='text-2xl font-bold text-indigo-900'>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className='flex flex-col sm:flex-row justify-between border p-4'>
                            <div className='flex flex-row gap-16'>
                                <img src={`/react-ecommerce/images/${item.imageUrl}`} alt={item.name} className="w-20 h-20 object-cover" />
                                <div className='flex flex-col justify-center'>
                                    <h2 className='text-xl font-bold'>{item.name}</h2>
                                    <p className='text-green-800 font-bold'>{item.price}$</p>
                                </div>
                            </div>

                            <div className='flex flex-row justify-end gap-10 items-center'>
                                <></>
                                <button className='bg-red-500 h-10 p-4 flex items-center text-white' onClick={() => RemoveItem(index)}>Remove Item</button>
                            </div>
                        </div>
                    ))}

                    <div className='border-t pt-4 mt-4 flex flex-col gap-4'>
                        <h2 className='text-lg font-bold'>Total: <span className='text-green-800'>{totalPrice.toFixed(2)}$</span></h2>
                        <button
                            className='bg-indigo-600 text-white p-2 rounded-sm hover:bg-indigo-900 transition-colors duration-300 ease-in-out'
                            onClick={() => {
                                placeOrder();
                                alert('Your order has been placed successfully! It will arrive soon.');
                            }}>Order Now</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart