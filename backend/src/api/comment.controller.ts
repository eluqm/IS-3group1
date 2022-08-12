import {RequestHandler, response} from 'express';

import User from '../models/User';
import Comment from '../models/Comment'
class CommentController{

    static getAllComments: RequestHandler = async (req, res) =>{
      try{
        const comments = await Comment.find();
        return res.status(200).json({comments});
      }
      catch (error) {
        return res.status(500).json({ msg: error });
      }
    };
    
    static getUserComments: RequestHandler = async (req, res) =>{
      try{
        if(!req.user){
          throw new Error("User doesn't exist");          
        }
        const userID = req.user._id;   
        const comments = await Comment.find({userid : userID});
        return res.status(200).json({comments});
           
      }
      catch(error){
        return res.status(500).json({ msg: error });
      }
    }; 

    static createComment : RequestHandler = async (req, res) => {
        try {
          if(!req.user){
            throw new Error("User doesn't exist");          
          }
          req.body.userid = req.user._id; 
          const comment = await Comment.create(req.body);
          return res.status(201).json({ comment });
        } 
        catch (error) {
          return res.status(500).json({ msg: error });
        }
    };

    static deleteComment : RequestHandler = async (req, res) => {
        try {
          const { id: commentID } = req.params;
          const comment = await Comment.findOneAndDelete({ _id: commentID });
          if (!comment)
            return res.status(404).json({ msg: `No comment with id: ${commentID}` });
          return res.status(200).json({ comment });
        } 
        catch (error) {
          return res.status(500).json({ msg: error });
        }
    };

    static editComment : RequestHandler = async (req, res) => {
      try {
        const { id: commentID } = req.params;
        const comment = await Comment.findOneAndUpdate({ _id: commentID }, req.body);
        if (!comment)
          return res.status(404).json({ msg: `No Event with id: ${commentID}` });
        return res.status(200).json({ comment });
      } catch (error) {
        return res.status(500).json({ msg: error });
      }
    };
    
}

export default CommentController