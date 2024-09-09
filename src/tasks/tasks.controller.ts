import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

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

    /**
    * Get tasks, optionally filtered by status or search term.
    * @param {GetTasksFilterDto} filterDto - Optional filters for getting tasks.
    * @returns {Task[]} A list of tasks, filtered or all tasks if no filters are provided.
    */
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
        return this.tasksService.getAllTasks();
        }
    }

    /**
    * Get a task by its ID.
    * @param {string} id - The ID of the task to retrieve.
    * @returns {Task} The task with the given ID.
    */
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    /**
    * Delete a task by its ID.
    * @param {string} id - The ID of the task to delete.
    */
    @Delete('/:id')
    deleteTask(@Param('id') id: string): void{
        this.tasksService.deleteTask(id);
    }

    /**
    * Create a new task.
    * @param {CreateTaskDto} createTaskDto - The data transfer object containing the title and description of the task.
    * @returns {Task} The newly created task.
    */
    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto
    ): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    /**
    * Update the status of a task.
    * @param {string} id - The ID of the task to update.
    * @param {TaskStatus} status - The new status of the task.
    * @returns {Task} The updated task.
     */
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    ): Task {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status);
    }
}
