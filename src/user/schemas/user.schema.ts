import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});
