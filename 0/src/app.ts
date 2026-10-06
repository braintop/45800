import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import userRoute from './routes/userRoute';
dotenv.config();
const app = express();
app.use(express.json());
const port = 4000;

export async function connectToMongoDB() {
  const mongoURI = process.env.MONGODB_URI;

    try {
      if (!mongoURI) {
        throw new Error('MONGODB_URI is not defined in the environment variables');
      }
      await mongoose.connect(mongoURI as string);
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}
connectToMongoDB();
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

