import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.entity";

export class TaskFactory {
    static createTask(createTaskDto: CreateTaskDto): Task {
      const { title, description } = createTaskDto;
      
      const task = new Task();
      task.title = title;
      task.description = description;
      task.status = TaskStatus.OPEN;
  
      return task;
    }
  }
  