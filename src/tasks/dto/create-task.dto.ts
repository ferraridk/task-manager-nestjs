/**
 * Data Transfer Object (DTO) for creating a new task.
 * Contains the title and description of the task.
 */
export class CreateTaskDto {
    /**
     * The title of the task.
     */
    title: string;

    /**
     * A detailed description of the task.
     */
    description: string;
}
