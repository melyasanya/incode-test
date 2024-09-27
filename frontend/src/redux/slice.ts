import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createBoard, fetchBoard} from './thunk';
import {IBoard, ICard} from '../constants/interface';

interface State {
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
  boards: IBoard[];
  cards: ICard[];
}

const initialState: State = {
  isOpen: false,
  isLoading: false,
  error: null,
  boards: [],
  cards: [],
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
  state.boards = [action.payload];
};

const handleCreateBoardFulfilled = (
  state: State,
  action: PayloadAction<IBoard>
) => {
  state.isLoading = false;
  state.error = null;
  state.boards = [action.payload];
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    toggleModal: (state: State) => {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, handlePending)
      .addCase(fetchBoard.fulfilled, handleFetchBoardFulfilled)
      .addCase(fetchBoard.rejected, handleRejected)
      .addCase(createBoard.pending, handlePending)
      .addCase(createBoard.fulfilled, handleCreateBoardFulfilled)
      .addCase(createBoard.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
export const {toggleModal} = boardsSlice.actions;
