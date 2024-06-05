import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [PrismaService, TasksService],
})
export class TasksModule {}
