import {configureStore} from '@reduxjs/toolkit';
import {boardsReducer} from './slice';

export const store = configureStore({
  reducer: boardsReducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;
