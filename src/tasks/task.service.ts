import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Tasks } from '@prisma/client';
import { CreateTaskDto } from './dto/create.task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDto): Promise<Tasks> {
    const author = await this.prisma.user.findUnique({
      where: { id: data.author.connect.id },
    });

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const newTask = await this.prisma.tasks.create({
      data: {
        title: data.title,
        content: data.content,
        author: {
          connect: {
            id: data.author.connect.id,
          },
        },
      },
    });
    return newTask;
  }
}
