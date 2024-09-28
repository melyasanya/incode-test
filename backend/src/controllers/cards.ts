import {Request, Response} from 'express';

import {Card} from '../models/card';
import {Board} from '../models/board';
import {httpError} from '../helpers/httpError';

export const createCard = async (req: Request, res: Response) => {
  const {title, description, status, id} = req.body;

  const newCard = new Card({title, description, status, board: id});
  await newCard.save();

  await Board.findByIdAndUpdate(id, {$push: {cards: newCard._id}});
  res.status(201).json(newCard);
};

export const getCardsByBoard = async (req: Request, res: Response) => {
  const {id} = req.params;

  const cards = await Card.find({id});

  res.status(200).json(cards);
};

export const updateCard = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {title, description, status} = req.body;

  const updatedCard = await Card.findByIdAndUpdate(
    id,
    {title, description, status},
    {new: true}
  );
  if (!updatedCard) {
    throw httpError(404, 'Card not found');
  }

  res.json(updatedCard);
};

export const deleteCard = async (req: Request, res: Response) => {
  const {id} = req.params;

  const deletedCard = await Card.findByIdAndDelete(id);
  if (!deletedCard) return res.status(404).json({message: 'Card not found'});

  await Board.findByIdAndUpdate(deletedCard.board, {
    $pull: {cards: deletedCard._id},
  });

  res.json({message: 'Card deleted successfully'});
};
