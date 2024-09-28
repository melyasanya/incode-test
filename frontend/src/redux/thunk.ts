import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {ErrorType, IBoard, ICard} from '../constants/interface';

const axiosInstance = axios.create({
  baseURL: 'https://incode-test.onrender.com',
});

export const fetchBoard = createAsyncThunk<
  IBoard[],
  string,
  {rejectValue: ErrorType}
>('boards/fetchBoards', async (boardId, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.get(`/api/boards/${boardId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
  }
});

export const createBoard = createAsyncThunk<
  IBoard,
  {name: string},
  {rejectValue: ErrorType}
>('boards/createBoard', async (boardData, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.post('/api/boards', boardData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
  }
});

export const deleteBoard = createAsyncThunk<
  void,
  string,
  {rejectValue: ErrorType}
>('boards/deleteBoard', async (boardId, {rejectWithValue}) => {
  try {
    await axiosInstance.delete(`/api/boards/${boardId}`);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
  }
});

export const updateBoard = createAsyncThunk<
  IBoard,
  string,
  {rejectValue: ErrorType}
>('boards/updateBoard', async (boardId, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.put<IBoard>(`/api/boards/${boardId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
    return rejectWithValue({
      message: 'Unknown error occurred',
    });
  }
});

export const createCard = createAsyncThunk<
  ICard,
  {title: string; description: string; status: string; id: string | undefined},
  {rejectValue: ErrorType}
>('cards/createCard', async (cardData, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.post('/api/cards', cardData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
    return rejectWithValue({
      message: 'Unknown error occurred',
    });
  }
});

export const deleteCard = createAsyncThunk<
  string,
  string,
  {rejectValue: ErrorType}
>('cards/deleteCard', async (cardId, {rejectWithValue}) => {
  try {
    await axiosInstance.delete(`/api/cards/${cardId}`);
    return cardId;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue({
        message: error.response.data.message || 'Failed to update board',
      });
    }
    return rejectWithValue({
      message: 'Unknown error occurred',
    });
  }
});

export const updateCard = createAsyncThunk<
  ICard,
  {
    id: string;
    title: string | undefined;
    description: string | undefined;
    status: string;
  },
  {rejectValue: ErrorType}
>(
  'cards/updateCard',
  async ({id, title, description, status}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.put<ICard>(`/api/cards/${id}`, {
        title,
        description,
        status,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue({
          message: error.response.data.message || 'Failed to update board',
        });
      }
      return rejectWithValue({
        message: 'Unknown error occurred',
      });
    }
  }
);
