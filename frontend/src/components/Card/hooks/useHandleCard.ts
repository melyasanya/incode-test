import {useDispatch} from 'react-redux';
import {SubmitHandler} from 'react-hook-form';

import type {AppDispatch} from '../../../redux/store';
import {deleteCard, updateCard} from '../../../redux/thunk';
import {useHandleModal} from '../../../hooks/useHandleModal';
import {Inputs} from '../../../constants/interface';

export const useHandleCard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const {toggleModal} = useHandleModal();

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };

  const handleEdit: SubmitHandler<Inputs> = (data) => {
    const {title, description, status} = data;
    const newCard = {
      id,
      title,
      description,
      status,
    };
    dispatch(updateCard(newCard));
    toggleModal();
  };

  return {handleDelete, handleEdit};
};
