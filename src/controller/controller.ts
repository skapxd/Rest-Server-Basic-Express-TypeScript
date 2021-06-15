import { Request, Response } from 'express';

export const getRoot = async ( req: Request, res: Response) => {
 
    return res.render('hello_word')
}