import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
const port = config.port;
const DATABASE_URL = config.DATABASE_URL;

async function main() {
    try {
        await mongoose.connect(DATABASE_URL as string);
        console.log('MongoDB connected succesfully with Atlas');
        app.listen(port, () => {
            console.log(`Tour and travel server is listening on port ${port}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}
main();
