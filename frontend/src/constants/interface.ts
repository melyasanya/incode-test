export interface IBoard {
  _id: string;
  name: string;
  cards: ICard[];
}

export interface ICard {
  _id: string;
  title: string;
  description: string;
  status: 'toDo' | 'inProgress' | 'done';
  board: string | undefined;
}

export interface ErrorType {
  message: string;
}
