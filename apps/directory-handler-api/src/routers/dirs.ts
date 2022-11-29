import * as express from 'express';
import { dirExplorer } from '../controllers/dirExplorer';

const router = express.Router();


router.post('/', (req, res, next) => dirExplorer(req, res, next));


export const dirsRouter = router;
