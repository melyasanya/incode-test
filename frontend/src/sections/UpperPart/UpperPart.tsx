import {ChangeEventHandler, useState} from 'react';
import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {fetchBoard, fetchCardsByBoard} from '../../redux/thunk';
import {selectBoard} from '../../redux/selectors';

export const UpperPart = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const board = useSelector(selectBoard);

  const handleClick = () => {
    dispatch(fetchBoard(value));
    dispatch(fetchCardsByBoard(board?._id));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex gap-[20px]">
      <Input text="Enter id here" value={value} onChange={handleChange} />
      <Button text="Load" onClick={handleClick} />
    </div>
  );
};
