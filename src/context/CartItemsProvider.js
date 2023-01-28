import { createContext, useState } from "react";

const CartItemsContext = createContext({});

export const CartItemsProvider = ({children}) => {
    const [cartItems1, setCartItems] = useState({})
    return (
        <CartItemsContext.Provider value={{cartItems1, setCartItems}}>
            {children}
        </CartItemsContext.Provider>
    )
}

export default CartItemsContext