import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../task-status.enum";

/**
 * Data Transfer Object (DTO) used for filtering tasks by status and search term.
 */
export class GetTasksFilterDto {
    /**
     * The status of the tasks to filter by.
     * Optional.
     */
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    /**
     * A search term to filter tasks by title or description.
     * Optional.
     */
    @IsOptional()
    @IsString()
    search?: string;
}
