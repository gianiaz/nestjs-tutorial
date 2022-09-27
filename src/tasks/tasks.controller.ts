import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { NotFoundException } from '@nestjs/common';
import { TaskUpdateDto } from './dto/task-update.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { filter } from 'rxjs';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskService.getTaskWithFilters(filterDto);
    }

    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Task {
    const task = this.taskService.findOne(id);

    console.log(task);

    if (task === undefined) {
      throw new NotFoundException('Task not found');
    }

    return this.taskService.findOne(id);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string): void {
    try {
      this.taskService.delete(id);
    } catch (e) {
      throw new NotFoundException('Task not found');
    }
  }
  @Patch('/:id/:property')
  patchTask(
    @Param('id') id: string,
    @Param('property') prop: string,
    @Body('value') value: string,
  ): Task {
    try {
      return this.taskService.patch(id, prop, value);
    } catch (e) {
      throw new NotFoundException('Task not found');
    }
  }

  @Put('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() taskUpdateDto: TaskUpdateDto,
  ): Task {
    try {
      return this.taskService.update(id, taskUpdateDto);
    } catch (e) {
      throw new NotFoundException('Task not found');
    }
  }

  @Post('task')
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
}
