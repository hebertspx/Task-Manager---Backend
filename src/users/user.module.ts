import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from './user.service';
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [PrismaService, UserService],
})
export class UsersModule {}
