import React, { useContext, useState } from 'react';
import { ValueContext } from '../component/Context';

import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';

const Cart = () => {

    const { cart, total, removeFromCart, clearCart } = useContext(ValueContext);

    const [togglecomplete, setToggleComplete] = useState(false);

    const ToggleCompleteHandler = () => {
        setToggleComplete(true);
        clearCart()
    }

    if (togglecomplete === true) {
        return (
            <div className="px-6 py-10 min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold mb-6">Thank you for your order!</h1>
                <p className="text-lg">Your order has been placed successfully.</p>
                <Link to="/shop" className="mt-4 text-[#38bdf8] hover:underline underline-offset-4">Continue Shopping</Link>
            </div>
        )
    }


    return (
        <div className="px-6 py-10">

            {cart.length === 0 ? (
                <div className="px-6 py-10 min-h-screen flex flex-col items-center justify-center">
                    <p className="text-lg">Your cart is empty.</p>
                    <Link to="/shop" className="mt-4 text-[#38bdf8] hover:underline underline-offset-4">Continue Shopping</Link>
                </div>
            ) : (
                <div className={`space-y-6 py-20 ${cart.length > 0 ? 'min-h-screen' : ''}`}>

                    <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 hover:ring-1 ring-[#38bdf8] transition duration-300 border rounded-2xl border-[#e2e8f0] flex justify-between items-center"
                        >
                            <div className="flex gap-4 items-center">

                                <Link to={`/shop/product/${item.id}`}>
                                    <img
                                        src={item.imageUrl?.[0] || 'https://via.placeholder.com/80'}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </Link>


                                <div className='space-y-1'>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-sm">Qty: {item.quantity}</p>
                                    <p className="text-[#0f172a]">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="cursor-pointer text-red-500 hover:underline"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}

                    <div className="text-right mt-4">
                        <h2 className="text-lg font-semibold">Total: $ {total.toFixed(2)} USD</h2>
                        <button onClick={ToggleCompleteHandler} className="my-4 mx-2 w-full sm:w-fit bg-[#38bdf8] text-white px-6 py-2 rounded-lg hover:bg-[#0ea5e9] transition cursor-pointer">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
