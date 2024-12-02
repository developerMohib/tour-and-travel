import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message: 'Please provide a valid email',
        },
    },

    photo: { type: String },
    role: { type: String, enum: ['user', 'admin'], require: true },
    userStatus: { type: String, require: true, enum: ['active', 'inactive'] },
});

const User = model('User', userSchema);
export default User;
