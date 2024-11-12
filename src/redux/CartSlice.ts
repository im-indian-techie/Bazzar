import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../Types";

interface CartState{
  cartItems:ProductProps[],
  cartCount:number,
  loading:boolean
}

const initialState:CartState={
    cartItems:[],
    cartCount:0,
    loading:false
}

const cartSlice= createSlice({
   name:'cart',
   initialState,
   reducers:{
     setCartItems:(state, action:PayloadAction<ProductProps[]>)=>{
        state.cartItems=action.payload;
        state.cartCount=action.payload.length;
    
    },
     addCartItem:(state, action:PayloadAction<ProductProps>)=>{
        state.cartItems.push(action.payload);
        state.cartCount+=1;
    }
   }
});

export const{setCartItems,addCartItem}=cartSlice.actions;
export const cartReducer= cartSlice.reducer;