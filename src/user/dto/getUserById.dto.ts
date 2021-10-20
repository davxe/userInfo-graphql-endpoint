import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserByIdDto {
  @Field()
  _id: string;
}
