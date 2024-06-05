import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;
  content: string;

  @IsNotEmpty()
  author: {
    connect: {
      id: number;
    };
  };
}
