import { Schema, model, Types } from 'mongoose'

const CommentSChema = new Schema({
  content : {
    type : String,
    required : true
  },

  userid : {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },

  eventid: {
  type: Types.ObjectId,
  required: true,
  ref : 'CallForPaper'
  },

  numLikes : {
    type: Number ,
    required: true,
    default: 0
  },

},{
  versionKey: false,
  timestamps: true
})

export default model('Comment', CommentSChema)