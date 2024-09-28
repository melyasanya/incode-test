import {useState, type FC} from 'react';
import {Button} from '../Button/Button';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';

import {selectBoard} from '../../redux/selectors';
import {Modal} from '../Modal/Modal';

interface Props {
  name: string;
  id: string;
}

export const Board: FC<Props> = ({name, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(selectBoard)?.cards.filter(
    (card) => card.status === id
  );
  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full">
      <h2 className="text-center">{name}</h2>
      <div className="relative flex flex-col rounded-xl bg-slate-600 bg-clip-border text-gray-700 shadow-md min-h-[400px] h-full">
        <div className="z-1 p-6 flex flex-col justify-between gap-[10px] h-full">
          <div className="flex flex-col gap-[8px]">
            {cards?.map((card) => (
              <Card
                key={card._id}
                title={card.title}
                description={card.description}
                id={card._id}
              />
            ))}
          </div>

          <Button text="Add task" onClick={toggle} />
        </div>
      </div>
      {isModalOpen && <Modal onClick={toggle} tableId={id} />}
    </div>
  );
};
