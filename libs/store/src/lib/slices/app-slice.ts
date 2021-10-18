import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppStateProps {
  appIsInitialized: boolean;
  message: string;
}

const initialState = {
  appIsInitialized: false,
  message: 'this is test message from core-store',
} as AppStateProps;

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    mutateAppIsInitialized(state, action: PayloadAction<boolean>) {
      state.appIsInitialized = action.payload;
    },

    mutateMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const appSelector = (state: StoreProps) => state.app;
export const { mutateAppIsInitialized, mutateMessage } = AppSlice.actions;
export default AppSlice.reducer;
