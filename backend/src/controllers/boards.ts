import {Request, Response} from 'express';
import {Board} from '../models/board';
import {generateUniqueId} from '../helpers/generateId';
import {httpError} from '../helpers/httpError';

export const createBoard = async (req: Request, res: Response) => {
  const {name} = req.body;
  const boardId = generateUniqueId();

  const existingBoard = await Board.findOne({name});
  if (existingBoard) {
    throw httpError(400, 'The board with this name already exists');
  }

  const newBoard = new Board({name, boardId});
  await newBoard.save();

  res.status(201).json(newBoard);
};

export const getBoardById = async (req: Request, res: Response) => {
  const {id} = req.params;

  const board = await Board.findOne({boardId: id});

  if (!board) {
    throw httpError(404, 'There is no board with such id');
  }

  res.status(200).json(board);
};

export const updateBoard = async (req: Request, res: Response) => {
  const {name} = req.body;
  const {id} = req.params;

  const updatedBoard = await Board.findOneAndUpdate(
    {boardId: id},
    {name},
    {new: true}
  );
  if (!updateBoard) {
    throw httpError(404, 'Board not found');
  }

  res.status(201).json(updatedBoard);
};

export const deleteBoard = async (req: Request, res: Response) => {
  const {id} = req.params;

  const result = await Board.findOneAndDelete({boardId: id});
  if (!result) {
    throw httpError(404, 'Board not found');
  }

  res.status(200).json({
    message: 'Board successfully deleted',
  });
};
