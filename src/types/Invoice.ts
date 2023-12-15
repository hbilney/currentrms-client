import {CustomField} from "./index";

export enum InvoiceType {
    Invoice,
    "Credit Note"
}

export enum InvoiceStatus {
    Open,
    Issued = 10,
    Paid = 20,
    Posted = 30,
    Voided = 40
}

export interface InvoiceTax {
    id: number,
    invoice_id: number,
    tax_rate_id: number,
    sort_order: number,
    name: string,
    rate: string,
    charge: string,
    amount: string,
    created_at: string,
    updated_at: string
}

export interface Invoice {
    store_id: number,
    member_id: number,
    billing_address_id: number,
    venue_id: number,
    tax_class_id: number,
    subject: string,
    description: string
    invoice_type: InvoiceType,
    invoice_type_name: string,
    invoiced_at: string,
    due_at: string,
    status: InvoiceStatus,
    status_name: string,
    reference: string,
    external_description: string,
    owned_by: number,
    charge_total: string,
    charge_excluding_tax_total: string,
    charge_including_tax_total: string,
    tax_total: string,
    prices_include_tax: boolean,
    custom_fields: [CustomField],
    owner: object,
    member: object,
    billing_address: object,
    venue: object,
    invoice_taxes: [InvoiceTax],
    id: number
}

// TODO: Need to sort generic objects