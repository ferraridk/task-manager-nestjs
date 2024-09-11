import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';  // Import the User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Register User entity
  providers: [UsersService],
  exports: [UsersService],  // Export UsersService to make it available for AuthService
})
export class UsersModule {}