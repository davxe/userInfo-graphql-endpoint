import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetUserByIdDto, UpdateUserDto } from './dto';
import { IUser } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async listUser(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  async listUserBasedOnId(body: GetUserByIdDto): Promise<IUser> {
    return await this.userModel.findOne({ _id: body._id });
  }

  async createUser(body: IUser): Promise<IUser> {
    const newUser = new this.userModel({ ...body });
    await newUser.save();
    return newUser;
  }

  async deleteUser(body: GetUserByIdDto): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(body._id);
  }

  async updateUser(body: UpdateUserDto): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(body._id, body, {
      new: true,
    });
  }
}
