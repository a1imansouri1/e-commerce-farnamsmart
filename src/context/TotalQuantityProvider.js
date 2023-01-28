import { createContext, useState } from "react";

const TotalQuantityContext = createContext({});

export const TotalQuantityProvider = ({children}) => {
    const [totalQuantity1, setTotalQuantity] = useState({})
    return (
        <TotalQuantityContext.Provider value={{totalQuantity1, setTotalQuantity}}>
            {children}
        </TotalQuantityContext.Provider>
    )
}

export default TotalQuantityContext