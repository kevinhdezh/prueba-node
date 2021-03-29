import {Router} from 'express';
import { getTramites, getTramite, postCatTramite, putCatTramite, deleteCatTramite } from '../controllers/catTramites';


const router = Router();

router.get(   '/', getTramites);
router.get(   '/:id', getTramite);
router.post(  '/', postCatTramite);
router.put(   '/:id', putCatTramite);
router.delete('/:id', deleteCatTramite);

export default router;