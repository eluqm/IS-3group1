import { RequestHandler } from 'express'
import { toUnicode } from 'punycode'
import User from '../models/User'


class UserController {
  static getUsers: RequestHandler = async (req, res) => {
    try {
      const users = await User.find()
      return res.json(users)
    } catch (error) {
      res.json(error)
    }
  }

  static getUser: RequestHandler = async (req, res) => {
    try {
      const userFound = await User.findById(req.params.id)
      return res.json(userFound)
    } catch (error) {
      return res.status(204).json()
    }
  }

  static createUser: RequestHandler = async (req, res) => {
    try {
      //verify repeated elements
      const userFound = await User.findOne({
        username: req.query.username,
        email: req.query.email  
      })

      if (userFound) {
        return res.status(409).json({
          error: `The User ${req.query.username} already exists`
        })
      }

      let {username, email, name, lastName, password, typeUser} = req.query

      const user = new User({
        username,
        email,
        name,
        lastName,
        password,
        typeUser
      })

      const savedUser = await user.save()
      res.json(savedUser)
    } catch (error) {
      res.json({error})
    }
  } 
}

export default UserController