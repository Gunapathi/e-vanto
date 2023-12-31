import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        products: productSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveStateMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
