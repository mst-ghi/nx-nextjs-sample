import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import AppSlice from './slices/app-slice';

const env = process.env.NODE_ENV;
export const CoreStore = configureStore({
  reducer: {
    app: AppSlice,
  },
  devTools: env === 'development',
});

type RootState = ReturnType<typeof CoreStore.getState>;

declare global {
  export type StoreProps = RootState;
}

export type AppDispatch = typeof CoreStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export * from './slices';
