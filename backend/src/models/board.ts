import mongoose, {Schema, Document} from 'mongoose';
import {ICard} from './card';

interface IBoard extends Document {
  name: string;
  cards: ICard[];
}

const boardSchema: Schema = new Schema<IBoard>({
  name: {
    type: String,
    required: true,
  },
  cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'cards'}],
});

export const Board = mongoose.model<IBoard>('boards', boardSchema);
