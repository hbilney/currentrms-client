import {Participant} from "./index";

export enum TimeStatus {
    Free,
    Busy
}

export interface Activity {
    subject: string,
    description: string,
    location: string,
    regarding_id: number,
    regarding_type: string,
    owned_by: number,
    starts_at: string,
    ends_at: string,
    priority: 1 | 2 | 3 | 4 | 5,
    type_id: number,
    status_id: number,
    completed: boolean,
    time_status: TimeStatus,
    custom_fields: object,
    participants: [Participant],
    id: number,
    activity_type_name: string,
    activity_status_name: string,
    time_status_name: string,
    regarding: object,
    owner: object
}

// TODO: Not sure exactly what 'custom_fields', 'regarding' and 'owner' return. Need to change from generic object