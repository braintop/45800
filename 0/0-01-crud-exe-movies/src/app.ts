import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import productRoutes from './routes/productRoutes';
import movieRoutes from './routes/movieRouters';
const app = express();

function f1(req: Request, res: Response, next: NextFunction){
    console.log('f1 is called');
    next();
}
function f2(req: Request, res: Response, next: NextFunction){
    console.log('f2 is called');
    next();
}
function isLoggedIn(req: Request, res: Response, next: NextFunction){
    console.log('isLoggedIn is called');
    next();
}
function isAdmin(req: Request, res: Response, next: NextFunction){
    console.log('isAdmin is called');
    (req as any).x = "1234567890";////{x: "1234567890"}
    next();
}



app.use(express.json());//middleware to parse the request body
app.use('/products',f1,f2,isLoggedIn, isAdmin, productRoutes);//middleware to parse the request body
app.use('/movies',f2,isLoggedIn, isAdmin, movieRoutes);//middleware to parse the request body

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});