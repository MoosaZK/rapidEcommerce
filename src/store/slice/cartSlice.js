import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '@/service/apiService';

export const fetchAllProducts = createAsyncThunk('cart/fetchAllProducts', async () => {
  const response = await fetchProducts();
  return response.products;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], 
    totalQuantity: 0,
    totalPrice: 0,  
    products: [], 
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
        itemInCart.totalPrice += itemInCart.price;
      } else {
        state.cartItems.push({ 
          ...action.payload, 
          quantity: 1, 
          totalPrice: action.payload.price 
        });
      }
      state.totalQuantity += 1; 
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload);
      if (itemInCart) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        state.totalQuantity -= itemInCart.quantity;
        state.totalPrice -= itemInCart.totalPrice; 
      }
    },
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemInCart = state.cartItems.find(item => item.id === id);
      if (itemInCart) {
        state.totalQuantity += quantity - itemInCart.quantity;
        state.totalPrice += (quantity - itemInCart.quantity) * itemInCart.price; 
        itemInCart.totalPrice = itemInCart.price * quantity;
        itemInCart.quantity = quantity; 
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload; 
        state.loading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export const { addToCart, removeFromCart, adjustQuantity } = cartSlice.actions;

export default cartSlice.reducer;
