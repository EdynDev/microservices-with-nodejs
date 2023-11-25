import { IsNotEmpty, IsString } from "class-validator";

export class UserInsertDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
