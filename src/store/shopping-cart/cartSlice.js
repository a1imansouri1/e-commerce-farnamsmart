import { createSlice } from '@reduxjs/toolkit'


const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const totalQuantity =
    localStorage.getItem("totalQuantity") !== null
        ? JSON.parse(localStorage.getItem("totalQuantity"))
        : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(item));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {

        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item._id === newItem._id)
            // state.totalQuantity++

            if (!existingItem) {

                state.cartItems.push({
                    _id: newItem._id,
                    name: newItem.name,
                    image: newItem.image,
                    price: newItem.price,
                    countInStock: newItem.countInStock,
                    quantity: 1,
                    totalPrice: newItem.price,
                    totalQuant: newItem.quantity,
                })
            } else if (existingItem.quantity < Number(existingItem.countInStock)) {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
                existingItem.totalQuant = Number(existingItem.totalQuant) + Number(newItem.quantity)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)

            state.totalQuantity = state.cartItems.reduce((total, item) => (
                total + Number(item.quantity)
            ), 0)

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        removeItem(state, action) {
            const _id = action.payload
            const existingItem = state.cartItems.find(item => item._id === _id)
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                existingItem.quantity = 1
                // state.cartItems = state.cartItems.filter(item => item._id !== _id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        deleteItem(state, action) {
            const _id = action.payload
            const existingItem = state.cartItems.find(item => item._id === _id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item._id !== _id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        clearCart(state, action) {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            // toast.error("Cart cleared", { position: "bottom-left" });
        },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice