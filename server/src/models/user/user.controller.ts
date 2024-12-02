import { Request, Response } from 'express';
import {
    createUserService,
    deleteSingleUserService,
    getSingleUserService,
    getUserService,
    updateSingleUserService,
} from './user.services';

// create user
const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload = req.body.user;
        const result = await createUserService(payload);
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

// get user
const getUser = async (req: Request, res: Response) => {
    try {
        const result = await getUserService();
        res.status(200).json({
            message: 'User find successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// get a single user
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const result = await getSingleUserService(userId);
        res.status(200).json({
            message: 'User find successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// update a single user
const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userData = req.body.user;
        const result = await updateSingleUserService(userId, userData);
        res.status(200).json({
            message: 'User updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// delete a single user
const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        await deleteSingleUserService(userId);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export {
    getUser,
    createUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
