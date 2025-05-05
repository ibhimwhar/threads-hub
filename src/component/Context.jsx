import { createContext, useState, useEffect } from "react";
import products from "../products container/Products";

// Create context
export const ValueContext = createContext();

// Provider component
export const ContextProvider = ({ children }) => {

    // State to manage available products
    const [Products, setProducts] = useState([...products]);

    // Load cart and total from localStorage on initial render
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [total, setTotal] = useState(() => {
        const storedTotal = localStorage.getItem("total");
        return storedTotal ? parseFloat(storedTotal) : 0;
    });

    // Save cart and total to localStorage on change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total", total.toString());
    }, [cart, total]);

    // Function to add product to cart
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setTotal(total + product.price);
    };

    // Function to remove product from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);

        const updatedTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(updatedTotal);
    };

    // Function to clear all items from cart (e.g. on checkout)
    const clearCart = () => {
        setCart([]);
        setTotal(0);
    };

    return (
        <ValueContext.Provider value={
            {
                Products,
                setProducts,
                cart,
                setCart,
                total,
                setTotal,
                addToCart,
                removeFromCart,
                clearCart
            }
        }>
            {children}
        </ValueContext.Provider>
    );
};
