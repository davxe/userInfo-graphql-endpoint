import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
  @Field()
  _id: string;
  @Field()
  userName: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
