/**
 * Represents a task with an ID, title, description, and status.
 */
export interface Task {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The title or name of the task.
     */
    title: string;

    /**
     * A detailed description of the task.
     */
    description: string;

    /**
     * The current status of the task.
     */
    status: TaskStatus;
}

/**
 * Enum representing the various statuses a task can have.
 */
export enum TaskStatus {
    /**
     * The task is open and has not been started yet.
     */
    OPEN = 'OPEN',

    /**
     * The task is currently in progress.
     */
    IN_PROGRESS = 'IN_PROGRESS',

    /**
     * The task has been completed.
     */
    DONE = 'DONE',
}
