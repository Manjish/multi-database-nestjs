import { IsNotEmpty } from 'class-validator';

export class CreateTesttDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  roleNumber: number;
  @IsNotEmpty()
  class: number;
  @IsNotEmpty()
  gender: string;
  @IsNotEmpty()
  marks: number;
}
