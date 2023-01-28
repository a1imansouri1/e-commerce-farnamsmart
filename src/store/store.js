import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice_ from "./shopping-cart/authSlice_";
import authSlice2 from "./shopping-cart/authSlice2";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
// import productsReducer from "./shopping-cart/productsSlice";

// import { productsApi } from "./shopping-cart/productsApi"; 

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
        auth_: authSlice_.reducer,
        auth2: authSlice2.reducer,
        // products: productsReducer,
        // [productsApi.reducerPath]: productsApi.reducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(productsApi.middleware)
})

export default store