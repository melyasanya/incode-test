import {ChangeEventHandler, useState} from 'react';
import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {fetchBoard} from '../../redux/thunk';

export const UpperPart = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(fetchBoard(value));
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
