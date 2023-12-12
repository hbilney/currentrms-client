import {CustomField, Participant, Address, Member} from "./index";

export enum OpportunityState {
    Enquiry,
    Draft,
    Quotation,
    Order
}

export enum OpportunityStatus {
    Open,
    Provisional,
    Reserved = 5,
    Active = 20,
    Completed = 40,
    Cancelled = 50,
    Lost = 60,
    Dead = 70,
    Postponed = 80
}

export interface Opportunity {
    store_id: number,
    project_id: number | null,
    member_id: number,
    billing_address_id: number,
    venue_id: number | null,
    tax_class_id: number,
    subject: string,
    description: string,
    number: string,
    starts_at: string,
    ends_at: string,
    charge_starts_at: string,
    charge_ends_at: string,
    ordered_at: string,
    quote_invalid_at: string,
    state: OpportunityState,
    use_chargeable_days: boolean,
    chargeable_days: number,
    open_ended_rental: boolean,
    invoiced: boolean,
    rating: number,
    revenue: string,
    customer_collecting: boolean,
    customer_returning: boolean,
    reference: string,
    external_description: string,
    delivery_instructions: string,
    owned_by: number,
    prep_starts_at: string,
    prep_ends_at: string,
    load_starts_at: string,
    load_ends_at: string,
    deliver_starts_at: string,
    deliver_ends_at: string,
    setup_starts_at: string,
    setup_ends_at: string,
    shows_starts_at: string,
    show_ends_at: string,
    takedown_starts_at: string,
    takedown_ends_at: string,
    collect_starts_at: string,
    collect_ends_at: string,
    unload_starts_at: string,
    unload_ends_at: string,
    deprep_starts_at: string,
    deprep_ends_at: string,
    tag_list: [[string]],
    assigned_surcharge_group_ids: [number],
    custom_fields: [CustomField],
    participants: [Participant],
    id: number,
    state_name: string,
    status: OpportunityStatus,
    status_name: string,
    charge_total: string,
    charge_excluding_tax_total: string,
    charge_including_tax_total: string,
    rental_charge_total: string,
    sale_charge_total: string,
    surcharge_total: string,
    service_charge_total: string,
    tax_total: string,
    original_rental_charge_total: string,
    original_sale_charge_total: string,
    original_surcharge_total: string,
    original_service_charge_total: string,
    original_tax_total: string,
    replacement_charge_total: string,
    provisional_cost_total: string,
    actual_cost_total: string,
    predicted_cost_total: string,
    weight_total: string,
    item_returned: boolean,
    price_include_tax: boolean,
    pricing_locked: boolean,
    latest_approval_document_status: number,
    has_deal_price: boolean,
    has_opportunity_deal: boolean,
    auto_costing_enabled: boolean,
    source_opportunity_id: number | null,
    owner: Member,
    member: Member,
    billing_address: Address,
    venue: object,
    opportunity_surcharges: []
}