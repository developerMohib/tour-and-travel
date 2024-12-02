import { model, Schema } from 'mongoose';

const tourSchema = new Schema({
    name: { type: String, require: true },
    durationHours: { type: Number, require: true },
    avarageRating: { type: Number, default: 5 },
    price: { type: Number, require: true },
    coverImage: { type: String, require: true },
    image: [String],
    startDate: { type: Date },
    startLocation: { type: String },
    location: [String],
    slug: { type: String },
});
const Tour = model('Tour', tourSchema);
export default Tour;
