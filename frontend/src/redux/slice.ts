import {createSlice} from '@reduxjs/toolkit';
import {
  createBoard,
  createCard,
  deleteBoard,
  deleteCard,
  fetchBoard,
  updateBoard,
  updateCard,
} from './thunk';
import {ErrorType, IBoard} from '../constants/interface';
import {
  handleCreateBoardFulfilled,
  handleCreateCardsFulfilled,
  handleDeleteBoardFulfilled,
  handleDeleteCardFulfilled,
  handleFetchBoardFulfilled,
  handlePending,
  handleRejected,
  handleUpdateBoardFulfilled,
  handleUpdateCardFulfilled,
} from './handlers';

export interface State {
  isLoading: boolean;
  error: ErrorType | null | undefined;
  boards: IBoard;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  boards: {
    _id: '',
    name: '',
    cards: [],
  },
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, handlePending)
      .addCase(fetchBoard.fulfilled, handleFetchBoardFulfilled)
      .addCase(fetchBoard.rejected, handleRejected)
      .addCase(createBoard.pending, handlePending)
      .addCase(createBoard.fulfilled, handleCreateBoardFulfilled)
      .addCase(createBoard.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, handleDeleteBoardFulfilled)
      .addCase(deleteBoard.rejected, handleRejected)
      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.fulfilled, handleUpdateBoardFulfilled)
      .addCase(updateBoard.rejected, handleRejected)
      .addCase(createCard.pending, handlePending)
      .addCase(createCard.fulfilled, handleCreateCardsFulfilled)
      .addCase(createCard.rejected, handleRejected)
      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.fulfilled, handleDeleteCardFulfilled)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(updateCard.pending, handlePending)
      .addCase(updateCard.fulfilled, handleUpdateCardFulfilled)
      .addCase(updateCard.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
