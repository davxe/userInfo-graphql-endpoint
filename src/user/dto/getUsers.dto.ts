import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetUsersDto {
  @Field()
  public id: string;
  @Field()
  public userName: string;
  @Field()
  public email: string;
  @Field()
  public password: string;
}
