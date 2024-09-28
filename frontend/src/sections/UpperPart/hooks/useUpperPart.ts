import {useDispatch} from 'react-redux';

import {useControlInput} from '../../../hooks/useControlInput';
import {fetchBoard} from '../../../redux/thunk';
import {AppDispatch} from '../../../redux/store';

export const useUpperPart = () => {
  const {value, setValue, handleChange} = useControlInput();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(fetchBoard(value));
    setValue('');
  };

  return {value, handleChange, handleClick};
};
