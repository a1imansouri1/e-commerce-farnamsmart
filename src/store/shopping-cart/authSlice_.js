import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem('token'),
    email: '',
    userLoaded: false
}

const authSlice_ = createSlice({
    name: 'auth_',
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token
            
            if (token) {
                // const user1 = jwtDecode(token);
                return {
                    ...state,
                    token,
                    // email: user1.user,
                    userLoaded: true
                }
            } else return { ...state, userLoaded: true }
        },
        logoutUser(state, action) {
            localStorage.removeItem('token');
            localStorage.removeItem('status_')
            localStorage.removeItem('email')
            return {
                ...state,
                token: "",
                email: ""
            };
        },
    },
})

export const { loadUser, logoutUser } = authSlice_.actions;

export default authSlice_;



