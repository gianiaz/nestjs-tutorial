import { TaskStatus } from '../task.model';
import { CreateTaskDto } from './create-task.dto';

export class TaskUpdateDto extends CreateTaskDto {
  status: TaskStatus;
}
