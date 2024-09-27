import type {FC} from 'react';
import {Button} from '../Button/Button';
import {Card} from '../Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {toggleModal} from '../../redux/slice';
import {selectIsOpen} from '../../redux/selectors';
import {Modal} from '../Modal/Modal';

interface Props {
  name: string;
  id: string;
}

export const Board: FC<Props> = ({name, id}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(selectIsOpen);

  const toggle = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="w-full">
      <h2 className="text-center">{name}</h2>
      <div className="relative flex flex-col rounded-xl bg-slate-600 bg-clip-border text-gray-700 shadow-md min-h-[400px] h-full">
        <div className="p-6 flex flex-col justify-between gap-[10px] h-full">
          <div>
            <Card />
          </div>

          <Button text="Add task" onClick={toggle} />
        </div>
      </div>
      {isOpen && <Modal onClick={toggle} />}
    </div>
  );
};
