import mongoose, {Schema, Document} from 'mongoose';

interface ICard extends Document {
  title: string;
  description: string;
  status: 'ToDo' | 'InProgress' | 'Done';
  board: mongoose.Schema.Types.ObjectId;
}

const cardSchema = new Schema<ICard>({
  title: {type: String, required: true},
  description: {type: String},
  status: {type: String, enum: ['ToDo', 'InProgress', 'Done'], required: true},
  board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true},
});

export const Card = mongoose.model<ICard>('Card', cardSchema);
