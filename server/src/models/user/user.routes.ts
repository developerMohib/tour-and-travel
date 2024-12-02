import { Router } from 'express';
import { createUser } from './user.controller';

const userRoute = Router();
userRoute.post('/create-user', createUser);
export default userRoute;
