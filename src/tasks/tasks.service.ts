import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskUpdateDto } from './dto/task-update.dto';

@Injectable()
export class TasksService {
  patch(id: string, prop: string, value: string): Task {
    const elem = this.findOne(id);

    if (undefined === elem) {
      throw new Error('Not found');
    }

    this.tasks = this.tasks.map((elem) => {
      if (elem.id === id) {
        console.log(prop);
        elem[prop] = value;
        return elem;
      }
      return elem;
    });

    return this.findOne(id);
  }
  delete(id: string): void {
    const elem = this.findOne(id);

    if (undefined === elem) {
      throw new Error('Not found');
    }

    this.tasks = this.tasks.filter((elem) => elem.id !== id);
  }
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task | undefined {
    return this.tasks.find((elem) => elem.id === id);
  }

  update(id: string, taskUpdateDto: TaskUpdateDto): Task {
    const elem = this.findOne(id);

    if (undefined === elem) {
      throw new Error('Not found');
    }

    this.tasks = this.tasks.map((elem) => {
      if (elem.id === id) {
        return { ...elem, ...taskUpdateDto };
      }
      return elem;
    });

    return this.findOne(id);
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
