import {Participant} from "./index";

export interface DiscussionComment {
    discussion_id: number,
    remark: string,
    created_by: number,
    id: number,
    first: boolean,
    updated_by: number
}

export interface Discussion {
    discussable_id: number,
    discussable_type: string,
    subject: string,
    last_comment_id: number,
    reply_count: number,
    participants: [Participant],
    created_by: number,
    id: number,
    updated_by: number,
    created_at: string,
    updated_at: string
}