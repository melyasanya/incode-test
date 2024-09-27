import {ChangeEventHandler, useState} from 'react';
import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useDispatch} from 'react-redux';
import {createBoard} from '../../redux/thunk';
import {AppDispatch} from '../../redux/store';

export const LowerPart = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    const newBoard = {
      name: value,
    };
    dispatch(createBoard(newBoard));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex gap-[20px]">
      <Input text="Name your board" value={value} onChange={handleChange} />
      <Button text="Create new board" onClick={handleClick} />
    </div>
  );
};
