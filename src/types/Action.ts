export interface Action {
    subject_id: number,
    subject_type: string,
    source_id: number,
    source_type: string,
    member_id: number,
    name: string,
    description: string,
    id: number,
    created_at: string,
    updated_at: string
}

// TODO: This also returns a member object as per the docs, haven't made the Member interface yet...