import {ChangeEventHandler, useState} from 'react';
import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {createBoard} from '../../redux/thunk';
import {AppDispatch} from '../../redux/store';
import {selectBoard} from '../../redux/selectors';

export const LowerPart = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const board = useSelector(selectBoard);

  const handleClick = () => {
    const newBoard = {
      name: value,
    };
    dispatch(createBoard(newBoard));
    setValue('');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="flex gap-[20px]">
        <Input text="Name your board" value={value} onChange={handleChange} />
        <Button text="Create new board" onClick={handleClick} />
      </div>
      {board._id && <p>Your board id is {board._id}</p>}
    </>
  );
};
