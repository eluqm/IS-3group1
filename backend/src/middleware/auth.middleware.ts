import { RequestHandler, Request, Response, NextFunction } from 'express';
import config from '../config/config';
import User, { IUserDocument, Privilege } from '../models/User';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: IUserDocument;
    }
  }
}

class AuthMiddleware {
  static authenticate: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer'))
      return res.status(401).json({ msg: 'Invalid authentication' });
    const token = authHeader.split(' ')[1];
    try {
      const jwtSecretKey = config.JWT_SECRET;
      const payload: any = jwt.verify(token, jwtSecretKey);
      
      const user: IUserDocument | null = await User.findById(payload.userId).select('-password');
      if (!user)
        throw new Error('Something went wrong');
      req.user = user;

      next();
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  }

  static authorize = (...roles: Array<Privilege>): ((req: Request, res: Response, next: NextFunction) => void) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.user)
      return res.status(500).json({ msg: 'Something went wrong' });

      if (!roles.includes(req.user.typeUser) && (roles.includes(Privilege.Self) && (req.params.id !== req.user._id)))
        return res.status(403).json({ msg: 'Unauthorized to access this route' });
        
      next();
    }
  }
};

export default AuthMiddleware;
