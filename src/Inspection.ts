export enum ScheduleType {
    Day,
    Week,
    Month,
    Year
}

export enum InspectionFieldType {
    "String",
    "Number",
    "Boolean",
    "List of Values"
}

export interface Inspection {
    name: string,
    mandatory: boolean,
    active: boolean,
    auto_pass: boolean,
    schedule_type: ScheduleType,
    schedule_interval: number,
    task_list: [],
    id: number,
    created_at: string,
    updated_at: string
}

export interface TaskListResult {
    name: string,
    field_type: InspectionFieldType,
    list_name_id: number,
    value: number
}

export interface InspectionResult {
    inspection_id: number,
    stock_level_id: number,
    inspection_at: string,
    passed: boolean,
    description: string,
    created_by: number,
    task_list_results: [TaskListResult],
    id: number,
    created_at: string,
    updated_at: string
}