import {useState} from 'react';

export const useHandleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {toggleModal, isModalOpen};
};
