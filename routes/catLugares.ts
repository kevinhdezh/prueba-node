import {Router} from 'express';
import { getCatLugares, getCatLugar, postCatLugar, putCatLugar, deleteCatLugares } from '../controllers/catLugares';

const router = Router();

router.get(   '/', getCatLugares);
router.get(   '/:id', getCatLugar);
router.post(  '/', postCatLugar);
router.put(   '/:id', putCatLugar);
router.delete('/:id', deleteCatLugares);

export default router;