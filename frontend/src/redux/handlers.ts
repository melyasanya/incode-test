import {PayloadAction} from '@reduxjs/toolkit';

import {ErrorType, IBoard, ICard} from '../constants/interface';
import {initialState, State} from './slice';

export const handlePending = (state: State, _: PayloadAction) => {
  state.isLoading = true;
};

export const handleRejected = (
  state: State,
  action: PayloadAction<ErrorType | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFetchBoardFulfilled = (state: State, action: any) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

export const handleCreateBoardFulfilled = (
  state: State,
  action: PayloadAction<IBoard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

export const handleDeleteBoardFulfilled = (state: State, _: PayloadAction) => {
  state.isLoading = false;
  state.error = null;
  state.boards = initialState.boards;
};

export const handleUpdateBoardFulfilled = (
  state: State,
  action: PayloadAction<IBoard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

export const handleCreateCardsFulfilled = (
  state: State,
  action: PayloadAction<ICard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards.cards.push(action.payload);
};

export const handleDeleteCardFulfilled = (
  state: State,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards.cards = state.boards.cards.filter(
    (card) => card._id !== action.payload
  );
};

export const handleUpdateCardFulfilled = (
  state: State,
  action: PayloadAction<ICard>
) => {
  state.isLoading = false;
  state.error = null;

  const updatedCard = action.payload;
  state.boards.cards = state.boards.cards.map((card) =>
    card._id === updatedCard._id ? updatedCard : card
  );
};
