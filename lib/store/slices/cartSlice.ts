import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Retrieve the initial state from localStorage if available
// const localStorageKey = 'products';
// const persistedState = window.localStorage.getItem(localStorageKey);
// const initialState = persistedState ? JSON.parse(persistedState) : [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [
            {
                id: 1,
                title: 'iPhone',
                thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
                quantity: 2,
                price: 549,
                rating: 7.2,
                total: 549,
            },
            {
                id: 2,
                title: 'iPhone X',
                thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                quantity: 2,
                price: 899,
                rating: 7.2,
                total: 1798
            }
        ],
        totalCartValue: 0,
        shippingAddress: {
            fullName: "",
            address: "",
            zipcode: "",
            city: "",
            country: "",
            phoneNumber: "",
            shippingMethod: "",
        }
    },
    reducers: {
        addProduct: (state, action: PayloadAction<any>) => {
            const { id, title, thumbnail, quantity, price, total, rating } = action.payload;
            const productIndex = state.products.findIndex((item: any) => item.id === id);
            if (productIndex !== -1) {
                if (action.payload.quantity > 0) {
                    state.products[productIndex].quantity = action.payload.quantity;
                }
            } else {
                state.products.push({ id, title, thumbnail, quantity, price, total, rating })
            }
        },
        deleteProduct: (state, action: PayloadAction<any>) => {
            const productId = action.payload.id;
            const productIndex = state.products.findIndex((item: any) => item.id === productId);
            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            }
        },
        updateCartTotal: (state, action: PayloadAction<any>) => {
            state.totalCartValue = action.payload.cartTotal;
        },
        updateShippingAddress: (state, action: PayloadAction<any>) => {
            state.shippingAddress = {
                ...state.shippingAddress,
                ...action.payload,
            };
        }
    }
})

// Middleware to save state changes to localStorage
// export const saveStateMiddleware = (store: any) => (next: any) => (action: any) => {
//     const result = next(action);
//     const state = store.getState();
//     localStorage.setItem(localStorageKey, JSON.stringify(state.products)); // Adjust this to your state structure
//     return result;
// };

export const { addProduct, deleteProduct, updateCartTotal, updateShippingAddress } = cartSlice.actions;
export default cartSlice.reducer;