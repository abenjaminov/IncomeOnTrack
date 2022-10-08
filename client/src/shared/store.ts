import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { baseApiSlice } from './api/base-api.slice';
import authReducer from './slices/auth.slice';
import modalSlice from './slices/modal.slice';

export const rootReducer = combineReducers({
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  auth: authReducer,
  modal: modalSlice
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(baseApiSlice.middleware),
  });

export const store = setupStore();
