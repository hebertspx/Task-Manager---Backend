import {
  IsString,
  IsEmail,
  MinLength,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  password: string;

  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  confirm_password: string;
}
