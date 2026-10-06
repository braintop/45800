import { Request, Response, NextFunction } from 'express';

export function g1(req: Request, res: Response, next: NextFunction){
    let x = (req as any).x;
    if(x !== "1234567890"){
        return res.json({"message": "You are not admin"});
    }
    console.log('g1 is called');
    next();
}
export function g2(req: Request, res: Response, next: NextFunction){
    console.log('g2 is called');
    next();
}
