import type {FC} from 'react';

import {Modal} from '../Modal/Modal';
import {useHandleModal} from '../../hooks/useHandleModal';
import {useHandleCard} from './hooks/useHandleCard';
import {Inputs} from '../../constants/interface';

interface Props extends Inputs {
  id: string;
  status: string;
}

export const Card: FC<Props> = ({title, description, id, status}) => {
  const {toggleModal, isModalOpen} = useHandleModal();
  const {handleDelete, handleEdit} = useHandleCard(id);

  return (
    <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <p>{title}</p>
        <p>{description}</p>
        <div className="flex justify-between">
          <p className="cursor-pointer" onClick={handleDelete}>
            Delete task
          </p>
          <p className="cursor-pointer" onClick={toggleModal}>
            Edit task
          </p>
          {isModalOpen && (
            <Modal
              title={title}
              description={description}
              onClick={toggleModal}
              onSubmit={handleEdit}
              status={status}
              edit
            />
          )}
        </div>
      </div>
    </div>
  );
};
