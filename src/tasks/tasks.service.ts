import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find((elem) => elem.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuid4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
