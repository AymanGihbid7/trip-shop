/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccueilWhereInput } from "./AccueilWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AccueilOrderByInput } from "./AccueilOrderByInput";

@ArgsType()
class AccueilFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccueilWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AccueilWhereInput, { nullable: true })
  @Type(() => AccueilWhereInput)
  where?: AccueilWhereInput;

  @ApiProperty({
    required: false,
    type: [AccueilOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AccueilOrderByInput], { nullable: true })
  @Type(() => AccueilOrderByInput)
  orderBy?: Array<AccueilOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AccueilFindManyArgs as AccueilFindManyArgs };
