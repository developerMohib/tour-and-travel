import { Types } from 'mongoose';
import { IUser } from './user.interface';
import User from './user.model';

// create user service section
const createUserService = async (payload: IUser): Promise<IUser> => {
    try {
        const result = await User.create(payload);
        // const user = result.toObject(); // Convert Mongoose document to plain object
        return result as IUser;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create user');
    }
};

// get user service section
const getUserService = async (): Promise<IUser[] | null> => {
    try {
        const result = await User.find();
        return result as IUser[];
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create user');
    }
};

// get signle user
const getSingleUserService = async (id: string) => {
    try {
        const userId = new Types.ObjectId(id);
        const result = await User.findById(userId);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Can't find this user");
    }
};

// update signle user
const updateSingleUserService = async (id: string, data: IUser) => {
    try {
        const userId = new Types.ObjectId(id);
        const result = await User.findByIdAndUpdate(userId, data, {
            new: true,
            runValidators: true,
        });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Can't find this user");
    }
};

// update signle user
const deleteSingleUserService = async (id: string) => {
    try {
        const userId = new Types.ObjectId(id);
        const result = await User.findByIdAndDelete(userId);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Can't find this user");
    }
};

export {
    getUserService,
    createUserService,
    getSingleUserService,
    updateSingleUserService,
    deleteSingleUserService,
};
