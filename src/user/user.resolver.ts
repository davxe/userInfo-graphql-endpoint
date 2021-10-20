import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { IUser } from './interface/user.interface';
import {
  CreateUserDto,
  GetUserByIdDto,
  GetUsersDto,
  UpdateUserDto,
} from './dto';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [GetUsersDto], { name: 'Get_All_Users', nullable: 'items' })
  listAll(): Promise<IUser[]> {
    return this.userService.listUser();
  }

  @Query(() => GetUsersDto, { name: 'Get_User_ById', nullable: true })
  async listOne(@Args('input') id: GetUserByIdDto): Promise<IUser> {
    return await this.userService.listUserBasedOnId(id);
  }

  @Mutation(() => GetUsersDto, { name: 'Create_Users' })
  create(@Args('input') body: CreateUserDto): Promise<IUser> {
    return this.userService.createUser(body);
  }

  @Mutation(() => GetUsersDto, { name: 'Delete_Users', nullable: true })
  delete(@Args('input') id: GetUserByIdDto): Promise<IUser> {
    return this.userService.deleteUser(id);
  }

  @Mutation(() => GetUsersDto, { name: 'Update_Users' })
  update(@Args('input') body: UpdateUserDto): Promise<IUser> {
    return this.userService.updateUser(body);
  }
}
