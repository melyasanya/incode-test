import {Router} from 'express';

import {ctrlWrapper} from '../../helpers/ctrlWrapper';
import {
  createBoard,
  deleteBoard,
  getBoardById,
  updateBoard,
} from '../../controllers/boards';

const router = Router();

router.post('/', ctrlWrapper(createBoard));

router.get('/:id', ctrlWrapper(getBoardById));

router.put('/:id', ctrlWrapper(updateBoard));

router.delete('/:id', ctrlWrapper(deleteBoard));

export default router;
