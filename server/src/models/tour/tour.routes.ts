import { Router } from 'express';
import {
    getATour,
    createTour,
    getAllTour,
    deleteATour,
    updateATour,
} from './tour.controller';

const tourRouter = Router();
tourRouter.post('/create-tour', createTour);
tourRouter.get('/get-tour', getAllTour);
tourRouter.get('/get-tour/:id', getATour);
tourRouter.put('/update-tour/:id', updateATour);
tourRouter.delete('/delete-tour/:id', deleteATour);
export default tourRouter;
