import mongoose, {Schema, Document} from 'mongoose';

export interface ICard extends Document {
  title: string;
  description: string;
  status: 'toDo' | 'inProgress' | 'done';
  board?: mongoose.Schema.Types.ObjectId;
}

const cardSchema = new Schema<ICard>({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, enum: ['toDo', 'inProgress', 'done'], required: true},
  board: {type: mongoose.Schema.Types.ObjectId, ref: 'boards'},
});

export const Card = mongoose.model<ICard>('cards', cardSchema);
