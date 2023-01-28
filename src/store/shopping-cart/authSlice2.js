import { createSlice } from '@reduxjs/toolkit'


// const items =
//     localStorage.getItem("token") !== null
//         ? localStorage.getItem("token")
//         : null;



const initialState = {
    token: localStorage.getItem("token"),
}

const authSlice2 = createSlice({
    name: 'auth2',
    initialState: initialState,

    reducers: {
        clearToken(state, action) {
            // state.token = null;
            localStorage.setItem('token', '')
            // localStorage.setItem("token", JSON.stringify(state.token));
        },
    }
})

export const authActions = authSlice2.actions
export default authSlice2