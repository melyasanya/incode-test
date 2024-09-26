import {Request, Response, NextFunction} from 'express';

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response | void>;

export const ctrlWrapper = (ctrl: Controller): Controller => {
  const func: Controller = async (req, res, next) => {
    try {
      return await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};
