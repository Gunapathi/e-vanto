import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Retrieve the initial state from localStorage if available
// const localStorageKey = 'products';
// const persistedState = window.localStorage.getItem(localStorageKey);
// const initialState = persistedState ? JSON.parse(persistedState) : [];

const productSlice = createSlice({
    name: 'products',
    initialState: <any>[],
    reducers: {
        addProduct: (state, action: PayloadAction<any>) => {
            const { id, title, thumbnail, quantity, price, disPercent, total } = action.payload;
            const productIndex = state.findIndex((item: any) => item.id === id);
            if (productIndex !== -1) {
                if (action.payload.quantity > 0) {
                    state[productIndex].quantity = action.payload.quantity;
                }
            } else {
                state[0] = { id, title, thumbnail, quantity, price, disPercent, total }
            }
        },
        deleteProduct: (state, action: PayloadAction<any>) => {
            const productId = action.payload.id;
            const productIndex = state.findIndex((item: any) => item.id === productId);
            if (productIndex !== -1) {
                return state.filter((item: any) => item.id !== productId)
            }
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

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;