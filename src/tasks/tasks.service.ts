import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}
  // getTaskWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //     });
  //   }
  //   return tasks;
  // }
  // patch(id: string, prop: string, value: string): Task {
  //   const elem = this.findOne(id);
  //   if (undefined === elem) {
  //     throw new Error('Not found');
  //   }
  //   this.tasks = this.tasks.map((elem) => {
  //     if (elem.id === id) {
  //       console.log(prop);
  //       elem[prop] = value;
  //       return elem;
  //     }
  //     return elem;
  //   });
  //   return this.findOne(id);
  // }
  // delete(id: string): void {
  //   const elem = this.findOne(id);
  //   if (undefined === elem) {
  //     throw new Error('Not found');
  //   }
  //   this.tasks = this.tasks.filter((elem) => elem.id !== id);
  // }
  // private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    console.log;
    return this.taskRepository.createTask(createTaskDto);
  }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const task: Task = {
  //     id: uuid4(),
  //     title: createTaskDto.title,
  //     description: createTaskDto.description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
}
