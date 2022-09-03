import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StorageKey } from '../types';
export interface IAuthSlice {
  token?: string;
}

const buildInitialState = (): IAuthSlice => {
  const tokenInLocalStorage = window.localStorage.getItem(StorageKey.token);
  if (tokenInLocalStorage) {
    return {
      token: tokenInLocalStorage,
    };
  }
  return {
    token: undefined,
  };
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: buildInitialState(),
  reducers: {
    setToken(state: IAuthSlice, action: PayloadAction<string>) {
      window.localStorage.setItem(StorageKey.token, action.payload);
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
