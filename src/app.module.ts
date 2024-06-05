import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './users/user.service';
import { TasksService } from './tasks/task.service';
import { TasksModule } from './tasks/task.module';

@Module({
  imports: [UsersModule, TasksModule],
  providers: [PrismaService, UserService, TasksService],
})
export class AppModule {}
