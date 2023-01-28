import { createContext, useState } from "react";

const TotalAmountContext = createContext({});

export const TotalAmountProvider = ({children}) => {
    const [totalAmount2, setTotalAmount] = useState({})
    return (
        <TotalAmountContext.Provider value={{totalAmount2, setTotalAmount}}>
            {children}
        </TotalAmountContext.Provider>
    )
}

export default TotalAmountContext