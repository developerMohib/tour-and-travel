import { Types } from 'mongoose';
import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTourService = async (playload: ITour): Promise<ITour> => {
    try {
        const result = await Tour.create(playload);
        return result as ITour;
    } catch (error) {
        console.log(error);
        throw new Error('Tour is not created');
    }
};

// get all tour
const getTourService = async (): Promise<ITour[] | null> => {
    try {
        const result = await Tour.find();
        return result as ITour[];
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't find any tour spot");
    }
};

// get a tour
const getASingleTourService = async (id: string): Promise<ITour | null> => {
    try {
        const tourId = new Types.ObjectId(id);
        const result = await Tour.findById(tourId);
        return result as ITour;
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't find any tour spot");
    }
};

// update a tour
const updateASingleTourService = async (
    id: string,
    data: ITour
): Promise<ITour | null> => {
    try {
        const tourId = new Types.ObjectId(id);
        const result = await Tour.findByIdAndUpdate(tourId, data,{new:true,runValidators: true,});
        return result as ITour;
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't find any tour spot");
    }
};
// delete a tour
const deleteASingleTourService = async (id: string): Promise<ITour | null> => {
    try {
        const tourId = new Types.ObjectId(id);
        const result = await Tour.findByIdAndDelete(tourId);
        return result as ITour;
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't find any tour spot");
    }
};

export {
    getTourService,
    createTourService,
    getASingleTourService,
    updateASingleTourService,
    deleteASingleTourService,
};
