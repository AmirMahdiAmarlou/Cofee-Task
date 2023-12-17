import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const shoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          if (e.quantity > 1) {
            e.quantity = e.quantity - 1;
            return e;
          } else if(e.quantity === 1){
            e.quantity= 0
          }
          else {
            return false;
          }
        } else {
          return true;
        }
      });
    },
    addItem: (state, action) => {
      let addItem=false
     
      if (state.list.length === 0) {
        let item = action.payload;
         item.quantity=1;
        state.list.push(item);
        addItem=true
      } else {
          state.list = state.list.map((e) => {
            if (e.id === action.payload.id) {
              e.quantity = e.quantity + 1;
              addItem=true
              console.log(e.length)
              return e; 
            } else {
              return e;
            }
          });
       if(!addItem) {
          let item = action.payload;
          item.quantity = 1;
          state.list.push(item);
        }
      }
    },
  },
});
export const {addItem,removeAll,removeItem} =shoppingSlice.actions
export default shoppingSlice.reducer