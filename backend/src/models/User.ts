import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username : {
    type : String,
    unique: true,
    required : true,
  },

  email : {
    type: String,
    unique: true,
    required: true,
  },

  avatar : {
    type: String,
    default: 'https://picsum.photos/id/1062/100/100'
  },
  
  name : {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  typeUser: {
    type: Number, //0: User, 1: Admin
    default: 0
  }

},{
  versionKey: false,
  timestamps: true
})

export default model('User', UserSchema)