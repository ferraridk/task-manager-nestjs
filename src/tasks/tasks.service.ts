import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
/**
 * Service to manage tasks in the application.
 */
export class TasksService {
    /**
    * Array of tasks.
    * @private
    */
    private tasks: Task[] = [];

    /**
    * Get all tasks.
    * @returns {Task[]} An array of tasks.
    */
    getAllTasks(): Task[] {
        return this.tasks;
    }

    /**
    * Get tasks based on filters such as status and search term.
    * @param {GetTasksFilterDto} filterDto The filter data transfer object.
    * @returns {Task[]} Filtered tasks.
    */
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        let tasks = this.getAllTasks(); 

        if (status) {
            tasks = tasks.filter((task) => task.status === status);
        }

        if (search) {
            tasks = tasks.filter((task) => {
                if (task.title.includes(search) || task.description.includes(search)) {
                    return true;
                }
                return false;
            });
        }

        return tasks;
    }

    /**
    * Get a task by its ID.
    * @param {string} id The ID of the task to retrieve.
    * @returns {Task} The task with the given ID.
    */
    getTaskById(id: string): Task{
        const found = this.tasks.find((task) => task.id === id)

        if(!found) {
            throw new NotFoundException(`Task with ID " ${id} " not found`);
        }
        return found;
    }

    /**
    * Delete a task by its ID.
    * @param {string} id The ID of the task to delete.
    */
    deleteTask(id: string): void {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter((task) => task.id !== found.id);
    }

    /**
    * Create a new task.
    * @param {CreateTaskDto} createTaskDto The data transfer object containing title and description.
    * @returns {Task} The newly created task.
    */
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description} = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        
        this.tasks.push(task);
        return task;
    }

    /**
    * Update the status of a task.
    * @param {string} id The ID of the task to update.
    * @param {TaskStatus} status The new status of the task.
    * @returns {Task} The updated task.
    */
    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task =  this.getTaskById(id);
        task.status = status;
        return task;
    }
}
