import { RequestHandler } from 'express';
import User from '../models/User';

class UserController {
  static getUsers: RequestHandler = async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.json(error);
    }
  };

  static getUser: RequestHandler = async (req, res) => {
    try {
      const userFound = await User.findById(req.params.id);
      return res.json(userFound);
    } catch (error) {
      return res.json(error);
    }
  };

  static createUser: RequestHandler = async (req, res) => {
    try {
      // verify repeated elements
      const userFound = await User.findOne({
        username: req.query.username,
        email: req.query.email,
      });

      if (userFound) {
        return res.status(409).json({
          error: `The User ${req.query.username} already exists`,
        });
      }

      let { username, email, name, lastName, password, typeUser } = req.query;

      const user = new User({
        username,
        email,
        name,
        lastName,
        password,
        typeUser,
      });

      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.json({ error });
    }
  };

  static deleteUser: RequestHandler = async (req, res) => {
    try {
      const { id: userID } = req.params;
      const userDeleted = await User.findByIdAndDelete(userID);
      if (!userDeleted)
        return res.status(404).json({ msg: `No User with id: ${userID}` });
      return res.status(200).json(userDeleted);      
    } catch (error) {
      return res.json(error);
    }
  }

  static updateUser: RequestHandler = async (req, res) => {
    try {
      const { id: userID } = req.params;
      const user = await User.findOneAndUpdate({ _id: userID }, req.body);
      if (!user)
        return res.status(404).json({ msg: `No User with id: ${userID}` });
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  }
}

export default UserController;
