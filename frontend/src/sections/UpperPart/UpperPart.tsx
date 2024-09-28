import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useUpperPart} from './hooks/useUpperPart';

export const UpperPart = () => {
  const {value, handleChange, handleClick} = useUpperPart();

  return (
    <div className="flex gap-[20px]">
      <Input text="Enter id here" value={value} onChange={handleChange} />
      <Button text="Load" onClick={handleClick} />
    </div>
  );
};
