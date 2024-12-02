import { Request, Response } from 'express';
import {
    createTourService,
    deleteASingleTourService,
    getASingleTourService,
    getTourService,
    updateASingleTourService,
} from './tour.services';

const createTour = async (req: Request, res: Response) :Promise<void> => {
    try {
        const tourData = req.body.tourData;
        const result = await createTourService(tourData);
        res.status(200).json({
            success: true,
            message: 'Tour is created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// get all tour
const getAllTour = async (req: Request, res: Response) => {
    try {
        const result = await getTourService();
        res.status(200).json({
            success: true,
            message: 'Tour get successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// get a tour
const getATour = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await getASingleTourService(id);
        res.status(200).json({
            success: true,
            message: 'This tour is getting successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// update a tour
const updateATour = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const data = req.body;
        const result = await updateASingleTourService(id, data);
        res.status(200).json({
            success: true,
            message: 'This tour is updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

// delete a tour
const deleteATour = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteASingleTourService(id);
        res.status(200).json({
            success: true,
            message: 'This tour is deleted successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export { createTour, getAllTour, getATour, updateATour, deleteATour };
