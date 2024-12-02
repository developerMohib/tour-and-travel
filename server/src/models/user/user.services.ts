import { IUser } from './user.interface';
import User from './user.model';

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

export { createUserService };
