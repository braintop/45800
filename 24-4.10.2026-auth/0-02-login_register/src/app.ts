import express from 'express';
import 'dotenv/config';
import productRoutes from './routes/productRoutes';
import movieRoutes from './routes/movieRouters';
import userRoutes from './routes/userRoutes';
const app = express();



app.use(express.json());//middleware to parse the request body
app.use('/products', productRoutes);//middleware to parse the request body
app.use('/movies', movieRoutes);//middleware to parse the request body
app.use('/users', userRoutes);//middleware to parse the request body
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});