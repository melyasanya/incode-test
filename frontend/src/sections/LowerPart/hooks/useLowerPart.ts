import {useDispatch} from 'react-redux';

import {useControlInput} from '../../../hooks/useControlInput';
import {AppDispatch} from '../../../redux/store';
import {createBoard, deleteBoard} from '../../../redux/thunk';
import {useSelectData} from '../../../hooks/useSelectData';

export const useLowerPart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {board} = useSelectData();
  const {value, setValue, handleChange} = useControlInput();

  const handleClick = () => {
    const newBoard = {
      name: value,
    };
    dispatch(createBoard(newBoard));
    setValue('');
  };

  const handleDelete = () => {
    dispatch(deleteBoard(board._id));
  };

  return {board, value, handleChange, handleClick, handleDelete};
};
