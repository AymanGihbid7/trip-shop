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
import { BoutiqueWhereInput } from "./BoutiqueWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BoutiqueListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BoutiqueWhereInput,
  })
  @ValidateNested()
  @Type(() => BoutiqueWhereInput)
  @IsOptional()
  @Field(() => BoutiqueWhereInput, {
    nullable: true,
  })
  every?: BoutiqueWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoutiqueWhereInput,
  })
  @ValidateNested()
  @Type(() => BoutiqueWhereInput)
  @IsOptional()
  @Field(() => BoutiqueWhereInput, {
    nullable: true,
  })
  some?: BoutiqueWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoutiqueWhereInput,
  })
  @ValidateNested()
  @Type(() => BoutiqueWhereInput)
  @IsOptional()
  @Field(() => BoutiqueWhereInput, {
    nullable: true,
  })
  none?: BoutiqueWhereInput;
}
export { BoutiqueListRelationFilter as BoutiqueListRelationFilter };
