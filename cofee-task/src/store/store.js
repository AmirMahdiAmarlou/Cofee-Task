import {configureStore} from '@reduxjs/toolkit'
import shoppingSliceReducer from './slices/shoppingSlice'
const store=configureStore({
    reducer:{
        cart:shoppingSliceReducer
    }
})
export default store