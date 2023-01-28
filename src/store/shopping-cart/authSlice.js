import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './api'
// import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem('token'),
    _id: localStorage.getItem('_id'),
    email: '',
    userLoaded: false
}


export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, { rejectWithValue }) => {
        try {

            const { data } = await axios.post(`${url}/user/signup`, {
                username: user.name,
                email: user.email,
                password: user.password,
                mobile: user.mobile
            })
            console.log(data)
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, { rejectWithValue }) => {
        try {

            const { data } = await axios.post(`${url}/user/login`, {
                'email': `${user.email}`,
                'password': `${user.password}`
            })
            console.log(data)

            const token2 = data.user.token

            localStorage.setItem('token', token2)

        } catch (err) {
            // const [errMsg, setErrMsg] = useState('')

            // useEffect(() => {
            //     setErrMsg('');
            // }, [user.email, user.password]);

            // if (!err?.response) {
            //     setErrMsg('No Server Response')
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Email or Password')
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized')
            // } else {
            //     setErrMsg('Login Failed')
            // }
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async (user, { rejectWithValue }) => {
        try {

            const { data } = await axios.put(`${url}/user/change-profile`,
                {
                    firstname: `${user.firstname}`,
                    lastname: `${user.lastname}`,
                    gender: `${user.gender}`,
                    age: `${user.age}`,
                    city: `${user.city}`,
                },
                {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`
                    }
                })
            console.log(data)
            localStorage.setItem('token', data.user.token)
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)

export const viewUser = (
    'auth/viewUser',
    async ({ rejectWithValue }) => {
        try {

            const { data } = await axios.get(`${url}/user/profile`,

                {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`
                    }
                })
            console.log(data)
            localStorage.setItem('token', data.user.token)
            localStorage.setItem('_id', data.user._id)
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)

        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
        loadUser(state, action) {
            const token = state.token
            const _id = state._id

            if (token) {
                // const user1 = jwtDecode(token);
                return {
                    ...state,
                    token,
                    _id,
                    // email: user1.user,
                    userLoaded: true
                }
            } else return { ...state, userLoaded: true }
        },
        logoutUser(state, action) {
            localStorage.removeItem('token');

            return {
                ...state,
                token: "",
                email: ""
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, message: 'pending' }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                // const user1 = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    // email: user1.user,
                    success: true,
                    'message': 'success'
                }
            } else return state
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                'message': 'rejected',
            }
        });

        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, message: 'pending' }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                // const user1 = jwtDecode(action.payload)
                return {
                    ...state,
                    token: action.payload,
                    // email: user1.user,
                    success: true,
                    'message': 'success'
                }
            } else return state
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                'message': 'rejected',
            }
        });
        // builder.addCase(viewUser.pending, (state, action) => {
        //     return { ...state, message: 'pending' }
        // })
        // builder.addCase(viewUser.fulfilled, (state, action) => {
        //     if (action.payload) {
        //         const user1 = jwtDecode(action.payload)

        //         return {
        //             ...state,
        //             token: action.payload,
        //             email: user1.user,
        //             success: true,
        //             'message': 'success'
        //         }
        //     } else return state
        // })
        // builder.addCase(viewUser.rejected, (state, action) => {
        //     return {
        //         ...state,
        //         success: false,
        //         'message': 'rejected',
        //     }
        // });

    },


})

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice;
