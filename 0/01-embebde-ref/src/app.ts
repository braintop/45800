import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import orderRoutes from './routes/orderRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/orders', orderRoutes);

const PORT = 3000;

async function startServer() {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error('MONGODB_URI is missing');
        }

        await mongoose.connect(mongoUri);

        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
}

startServer();
