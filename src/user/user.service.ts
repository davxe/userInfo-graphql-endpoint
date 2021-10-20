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

  async listUserBasedOnId(id: any): Promise<IUser> {
    return await this.userModel.findOne({ _id: id });
  }

  async createUser(body: IUser): Promise<IUser> {
    const newUser = new this.userModel(body);
    await newUser.save();
    return newUser;
  }

  async deleteUser(id: GetUserByIdDto): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async updateUser(id: UpdateUserDto): Promise<IUser> {
    console.log('id', id);
    return await this.userModel.findByIdAndUpdate(id, {
      new: true,
    });
  }
}
