import { Controller, Post, Body } from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from './dto/create.task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() data: CreateTaskDto) {
    console.log(data);
    try {
      const createTask = await this.tasksService.create(data);
      return createTask;
    } catch (error) {
      console.error('Error creating task', error);
      throw new Error('Failed to create task');
    }
  }
}
