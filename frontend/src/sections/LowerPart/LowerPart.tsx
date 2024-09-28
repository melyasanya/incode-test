import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import {useLowerPart} from './hooks/useLowerPart';

export const LowerPart = () => {
  const {board, value, handleChange, handleClick, handleDelete} =
    useLowerPart();

  return (
    <>
      <div className="flex gap-[20px]">
        <Input text="Name your board" value={value} onChange={handleChange} />
        <Button text="Create new board" onClick={handleClick} />
      </div>
      {board._id && (
        <>
          <p>Your board id is {board._id}</p>
          <p onClick={handleDelete}>Delete this board</p>
        </>
      )}
    </>
  );
};
