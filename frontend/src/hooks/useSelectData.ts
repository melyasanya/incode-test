import {useSelector} from 'react-redux';

import {selectBoard} from '../redux/selectors';

export const useSelectData = (id?: string) => {
  const board = useSelector(selectBoard);
  const cards = useSelector(selectBoard)?.cards.filter(
    (card) => card.status === id
  );

  return {board, cards};
};
