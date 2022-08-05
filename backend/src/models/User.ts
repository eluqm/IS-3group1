import { Schema, model, Document, Query } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import config from '../config/config';

enum Role {
  BasicUser = 0,
  Admin = 1
}

enum SelfPrivilege {
  Self = -1
}

export type Privilege = Role | SelfPrivilege;
export const Privilege = { ...Role, ...SelfPrivilege };

interface IUser {
  username: string;
  email: string;
  avatar?: string;
  name: string;
  lastName: string;
  password: string;
  typeUser: Role;
}

export interface IUserDocument extends IUser, Document {
  fullName: string;
  createJWT(): string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema<IUserDocument> = new Schema<IUserDocument>(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Please, provide a username'],
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Please, provide an email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please, provide a valid email'
      ],
    },

    avatar: {
      type: String,
      default: 'https://picsum.photos/id/1062/100/100',
    },

    name: {
      type: String,
      required: [true, 'Please, provide a name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please, provide a surname'],
    },
    password: {
      type: String,
      required: [true, 'Please, provide a password'],
    },
    typeUser: {
      type: Number,
      enum: {
        values: [0, 1], // 0: User, 1: Admin
        message: '{VALUE} is not a valid role',
      },
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.pre<IUserDocument>('save', async function (next: Function) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

UserSchema.pre<Query<IUserDocument, IUserDocument>>('findOneAndUpdate', async function (next: Function) {
  let update: any = { ...this.getUpdate() };

  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
    this.setUpdate(update);
  }

  next();
})

UserSchema.virtual('fullName').get(function (this: IUserDocument) {
  return this.name + ' ' + this.lastName;
})

UserSchema.methods.createJWT = function (this: IUserDocument) {
  const jwtSecretKey: string = config.JWT_SECRET;
  const jwtLifetime: string = config.JWT_LIFETIME;
  return jwt.sign({ userId: this._id, name: this.name }, jwtSecretKey, {
    expiresIn: jwtLifetime,
  });
}

UserSchema.methods.comparePassword = async function (this: IUserDocument, candidatePassword: string) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}

export default model<IUserDocument>('User', UserSchema); 
