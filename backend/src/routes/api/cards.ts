import {Router} from 'express';

import {ctrlWrapper} from '../../helpers/ctrlWrapper';
import {
  createCard,
  deleteCard,
  getCardsByBoard,
  updateCard,
} from '../../controllers/cards';

const router = Router();

router.post('/', ctrlWrapper(createCard));

router.get('/:boardId', ctrlWrapper(getCardsByBoard));

router.put('/:id', ctrlWrapper(updateCard));

router.delete('/:id', ctrlWrapper(deleteCard));

export default router;
