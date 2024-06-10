/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoyagesWhereInput } from "./VoyagesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoyagesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VoyagesWhereInput,
  })
  @ValidateNested()
  @Type(() => VoyagesWhereInput)
  @IsOptional()
  @Field(() => VoyagesWhereInput, {
    nullable: true,
  })
  every?: VoyagesWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoyagesWhereInput,
  })
  @ValidateNested()
  @Type(() => VoyagesWhereInput)
  @IsOptional()
  @Field(() => VoyagesWhereInput, {
    nullable: true,
  })
  some?: VoyagesWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoyagesWhereInput,
  })
  @ValidateNested()
  @Type(() => VoyagesWhereInput)
  @IsOptional()
  @Field(() => VoyagesWhereInput, {
    nullable: true,
  })
  none?: VoyagesWhereInput;
}
export { VoyagesListRelationFilter as VoyagesListRelationFilter };
