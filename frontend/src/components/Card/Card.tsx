import {FC} from 'react';
import {Inputs} from '../Modal/Modal';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {deleteCard} from '../../redux/thunk';

interface Props extends Inputs {
  id: string;
}

export const Card: FC<Props> = ({title, description, id}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => {
    dispatch(deleteCard(id));
  };
  return (
    <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <p>{title}</p>
        <p>{description}</p>
        <div className="flex justify-between">
          <p onClick={handleDelete}>Delete task</p>
          <p>Edit task</p>
        </div>
      </div>
    </div>
  );
};
