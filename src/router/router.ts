import { Router } from 'express'
import { getRoot } from '../controller/controller';

const router = Router();

router.get(
    /* Nombre de ruta -->*/ '/', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ getRoot 
);

export default router;