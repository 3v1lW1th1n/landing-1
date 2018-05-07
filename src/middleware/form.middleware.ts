import { NextFunction, Request, Response } from 'express';
import { FormModel } from '../models/form.model';

export const formMiddleware: (req: Request, res: Response, next: NextFunction) => void =
async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const form = await new FormModel().getForm({ section: 'main' });
    req.params.form = form;
    return next();
  } catch (err) {
    // tslint:disable-next-line
    console.log(req, res);
    res.status(400);
    return next(err);
  }
};
