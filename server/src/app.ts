import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import userRoute from './models/user/user.routes';
import tourRouter from './models/tour/tour.routes';

// middle ware
app.use(express.json());
app.use(cors());

// user routes
app.use('/user/api/v1', userRoute);
app.use('/user/api/v2', tourRouter);

// basic home route
app.get('/', (req, res) => {
    res.send('Tour and travel server okay!');
});

// global route and error hanleder
app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    });
});

// global error handler
type Err = string | null | undefined | number;
app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(500).json({
            success: false,
            message: 'Server Error or Something went wrong',
        });
    }
    next();
});

export default app;
