// change to import and export
import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MonngoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Connection Error: ${error.message}`)
        process.exit(1);
    }
}
