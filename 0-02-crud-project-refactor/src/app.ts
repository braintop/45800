import express from 'express';
import 'dotenv/config';
import cityRoutes from './routes/cityRoute';
import courseRoutes from './routes/courseRoute';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/cities', cityRoutes);
app.use('/courses', courseRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});