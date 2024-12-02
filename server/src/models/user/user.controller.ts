import { Request, Response } from 'express';
import User from './user.model';

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload = req.body;
        const result = await User.create(payload);
        res.status(200).json({
            message: 'User created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export const userController = { createUser };
