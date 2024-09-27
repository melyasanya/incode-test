import {Board} from '../../components/Board/Board';
import {boards} from '../../constants/boards';

export const Boards = () => {
  return (
    <div className="flex gap-[20px] justify-between">
      {boards.map((el) => {
        return <Board name={el.name} id={el.id} />;
      })}
    </div>
  );
};
