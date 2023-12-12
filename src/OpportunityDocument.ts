export enum OpportunityDocumentStatus {
    Open,
    Accepted,
    Declined
}

export interface OpportunityDocumentData {
    header: string,
    body: string,
    footer: string,
    stylesheet: string
}

export interface OpportunityDocument {
    opportunity_id: number,
    document_id: number,
    data: OpportunityDocumentData,
    status: OpportunityDocumentStatus,
    approved_declined_at: string,
    view_count: number,
    last_view_at: string,
    comment: string,
    signed_by: string,
    signature: string,
    remote_ip: string,
    user_agent: string,
    uuid: string,
    created_at: string,
    updated_at: string,
    id: number
}