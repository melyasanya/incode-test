import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  createBoard,
  createCard,
  deleteBoard,
  deleteCard,
  fetchBoard,
  updateBoard,
  updateCard,
} from './thunk';
import {IBoard, ICard} from '../constants/interface';

interface State {
  isLoading: boolean;
  error: string | null;
  boards: IBoard;
}

const initialState: State = {
  isLoading: false,
  error: null,
  boards: {
    _id: '',
    name: '',
    cards: [],
  },
};

const handlePending = (state: State, _: any) => {
  state.isLoading = true;
};

const handleRejected = (state: State, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchBoardFulfilled = (state: State, action: any) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

const handleCreateBoardFulfilled = (
  state: State,
  action: PayloadAction<IBoard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

const handleDeleteBoardFulfilled = (state: State, _: PayloadAction) => {
  state.isLoading = false;
  state.error = null;
  state.boards = initialState.boards;
};

const handleUpdateBoardFulfilled = (
  state: State,
  action: PayloadAction<IBoard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards = action.payload;
};

const handleCreateCardsFulfilled = (
  state: State,
  action: PayloadAction<ICard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards.cards.push(action.payload);
};

const handleDeleteCardFulfilled = (
  state: State,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards.cards = state.boards.cards.filter(
    (card) => card._id !== action.payload
  );
};

const handleUpdateCardFulfilled = (
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
