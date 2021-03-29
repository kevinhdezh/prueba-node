import {Router} from 'express';
import { getCatEstatu, getCatEstatus, postCatEstatus, putCatEstatus, deleteCatEstatus } from '../controllers/catEstatus';

const router = Router();

router.get(   '/', getCatEstatus);
router.get(   '/:id', getCatEstatu);
router.post(  '/', postCatEstatus);
router.put(   '/:id', putCatEstatus);
router.delete('/:id', deleteCatEstatus);

export default router;