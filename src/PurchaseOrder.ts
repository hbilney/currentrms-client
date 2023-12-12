import {Address, Member} from "./index";

export enum PurchaseOrderState {
    Draft,
    Order
}

export enum PurchaseOrderStatus {
    Open,
    Authorised = 10,
    Send = 20,
    Completed = 30,
    Cancelled = 40
}

export interface PurchaseOrder {
    store_id: number,
    member_id: number,
    supplier_address_id: number,
    venue_id: number | null,
    tax_class_id: number,
    subject: string,
    description: string,
    number: string,
    ordered_at: string,
    delivery_at: string,
    expected_at: string,
    expected_note: string,
    return_at: string,
    state: PurchaseOrderState,
    self_collecting: boolean,
    self_returning: boolean,
    reference: string,
    external_description: string,
    delivery_instructions: string,
    delivery_attention: string,
    delivery_telephone: string,
    owned_by: number,
    authorised_by: number,
    authorised_at: string,
    currency_code: string,
    base_currency_code: string,
    exchange_rate: string,
    tag_list: [[string]],
    id: number,
    state_name: string,
    status: PurchaseOrderStatus,
    status_name: string,
    charge_total: string,
    tax_total: string,
    base_charge_total: string,
    base_tax_total: string,
    weight_total: string,
    created_at: string,
    updated_at: string,
    owner: Member,
    supplier_address: Address,
    venue: object
}

export interface PurchaseOrderDocumentData {
    header: string,
    body: string,
    footer: string,
    stylesheet: string
}

export interface PurchaseOrderDocument {
    purchase_order_id: number,
    document_id: number,
    data: PurchaseOrderDocumentData,
    created_at: string,
    updated_at: string,
    id: number
}