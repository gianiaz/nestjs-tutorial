import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Cazzone, il titolo ci vuole' })
  title: string;
  @IsNotEmpty()
  description: string;
}
