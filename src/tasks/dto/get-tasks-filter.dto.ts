import { TaskStatus } from "../task.model";

/**
 * Data Transfer Object (DTO) used for filtering tasks by status and search term.
 */
export class GetTasksFilterDto {
    /**
     * The status of the tasks to filter by.
     * Optional.
     */
    status?: TaskStatus;

    /**
     * A search term to filter tasks by title or description.
     * Optional.
     */
    search?: string;
}
