import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../../../redux/store';
import {SubmitHandler} from 'react-hook-form';

import {useHandleModal} from '../../../hooks/useHandleModal';
import {createCard} from '../../../redux/thunk';
import {useSelectData} from '../../../hooks/useSelectData';
import {Inputs} from '../../../constants/interface';

export const useCreateCard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const {isModalOpen, toggleModal} = useHandleModal();
  const {board} = useSelectData(id);

  const handleSubmit: SubmitHandler<Inputs> = (data) => {
    const {title, description} = data;
    const newTask = {
      title,
      description,
      status: id,
      id: board?._id,
    };
    dispatch(createCard(newTask));
    toggleModal();
  };

  return {handleSubmit, isModalOpen, toggleModal};
};
