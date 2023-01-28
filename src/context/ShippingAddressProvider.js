import {useState, createContext } from "react";

const ShippingAddressContext = createContext({});

export const ShippingAddressProvider = ({children}) => {
    const [shippingAddress1, setShippingAddress] = useState({})
    return (
        <ShippingAddressContext.Provider value={{shippingAddress1, setShippingAddress}}>
            {children}
        </ShippingAddressContext.Provider>
    )
}

export default ShippingAddressContext

// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({children}) => {
//     const [auth, setAuth] = useState({})
//     return (
//         <AuthContext.Provider value={{auth, setAuth}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext

