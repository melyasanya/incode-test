import mongoose, {Schema, Document} from 'mongoose';

interface IBoard extends Document {
  name: string;
  boardId: string;
}

const boardSchema: Schema = new Schema({
  boardId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Board = mongoose.model<IBoard>('Board', boardSchema);
