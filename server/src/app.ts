import express from 'express';
const app = express();
import cors from 'cors';
import userRoute from './models/user/user.routes';

// middle ware
app.use(express.json());
app.use(cors());

// user routes
app.use('/user/api/v1', userRoute);

// basic home route
app.get('/', (req, res) => {
    res.send('Tour and travel server okay!');
});

export default app;
