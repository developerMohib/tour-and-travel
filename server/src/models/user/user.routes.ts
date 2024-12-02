import { Router } from 'express';
import { createUser, deleteSingleUser, getSingleUser, getUser, updateSingleUser } from './user.controller';

const userRoute = Router();
userRoute.post('/create-user', createUser);
userRoute.get('/get-user', getUser);
userRoute.get('/get-user/:id', getSingleUser);
userRoute.put('/update-user/:id', updateSingleUser);
userRoute.delete('/delete-user/:id', deleteSingleUser);
export default userRoute;
