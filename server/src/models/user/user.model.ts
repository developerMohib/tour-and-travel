import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, require: true },
    age: { type: String, require: true },
    email: { type: String, require: true },
    photo: { type: String },
    role: { type: String, require: true },
    userStatus: { type: String, require: true },
});

const User = model('User', userSchema);
export default User;
