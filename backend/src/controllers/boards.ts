import {Request, Response} from 'express';
import {Board} from '../models/board';
// import {generateUniqueId} from '../helpers/generateId';
import {httpError} from '../helpers/httpError';

export const createBoard = async (req: Request, res: Response) => {
  const {name} = req.body;

  const existingBoard = await Board.findOne({name});
  if (existingBoard) {
    throw httpError(400, 'The board with this name already exists');
  }

  const newBoard = new Board({name});
  await newBoard.save();

  res.status(201).json(newBoard);
};

export const getBoardById = async (req: Request, res: Response) => {
  const {id} = req.params;

  const board = await Board.findById(id).populate('cards');

  if (!board) {
    throw httpError(404, 'There is no board with such id');
  }

  res.status(200).json(board);
};

export const updateBoard = async (req: Request, res: Response) => {
  const {name} = req.body;
  const {id} = req.params;

  const updatedBoard = await Board.findByIdAndUpdate(id, {name}, {new: true});
  if (!updateBoard) {
    throw httpError(404, 'Board not found');
  }

  res.json(updatedBoard);
};

export const deleteBoard = async (req: Request, res: Response) => {
  const {id} = req.params;

  const result = await Board.findByIdAndDelete(id);
  if (!result) {
    throw httpError(404, 'Board not found');
  }

  res.status(200).json({
    message: 'Board successfully deleted',
  });
};
