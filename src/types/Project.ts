import {Address, CustomField, Icon, Member, Opportunity, Participant} from "./index";

export enum ProjectStatus {
    Open,
    Closed = 40
}

export interface Project {
    store_id: number,
    member_id: number,
    billing_address_id: number,
    venue_id: number | null,
    tax_class_id: number,
    name: string,
    description: string,
    starts_at: string,
    ends_at: string,
    project_invoicing: boolean,
    reference: string,
    owned_by: number,
    custom_fields: [CustomField],
    participants: [Participant],
    id: number,
    status: ProjectStatus,
    status_name: string,
    created_at: string,
    updated_at: string,
    icon: Icon,
    owner: Member,
    member: Member,
    billing_address: Address,
    venue: object,
    opportunities: [Opportunity]
}

export interface ProjectDocumentData {
    header: string,
    body: string,
    footer: string,
    stylesheet: string
}

export interface ProjectDocument {
    project_id: number,
    document_id: number,
    data: ProjectDocumentData,
    created_at: string,
    updated_at: string,
    id: number
}