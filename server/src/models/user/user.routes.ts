import { Router } from 'express';
import { createUser, getSingleUser, getUser } from './user.controller';

const userRoute = Router();
userRoute.post('/create-user', createUser);
userRoute.get('/get-user', getUser);
userRoute.get('/get-user/:id', getSingleUser);
export default userRoute;
