import { RequestHandler } from 'express';
import User from '../models/User';

class AuthController {
  static registerUser: RequestHandler = async (req, res) => {
    try {
      const user = await User.create({ ...req.body });
      const token = user.createJWT();
          
      return res.status(201).json({ user: { name: user.fullName }, token });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  }
    
  static loginUser: RequestHandler = async (req, res) => {
    try {
      const { email, password } = req.body;
    
      if (!email || !password)
        return res.status(400).json({ msg: 'Please, provide both email and password' });
    
      const user = await User.findOne({ email });
          
      if (!user)
        return res.status(403).json({ msg: 'Invalid credentials (email)' });
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect)
        return res.status(403).json({ msg: 'Invalid credentials (password)' });
    
      const token = user.createJWT();
      return res.status(200).json({ user: { name: user.fullName }, token });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  }
};

export default AuthController;
