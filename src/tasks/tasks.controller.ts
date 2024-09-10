import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
/**
* Controller that handles HTTP requests related to tasks.
* Provides CRUD operations for managing tasks.
*/
export class TasksController {
    /**
    * Constructor for TasksController.
    * @param {TasksService} tasksService - The service that manages task-related operations.
    */
    constructor(private tasksService: TasksService) {}

    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Promise <Task[]> {
        return this.tasksService.getTasks(filterDto);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    ): Promise<Task> {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status);
    }

    @Delete('/:id')
    async deleteTask(@Param('id') id: string): Promise<void> {
        this.tasksService.deleteTask(id);
    }

/* 
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
        return this.tasksService.getAllTasks();
        }
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    ): Task {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status);
    }
     */
}
