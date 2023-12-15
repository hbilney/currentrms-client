import {AccessoryInclusionType, AccessoryMode, CustomField} from "./index";

export enum InvoiceItemType {
    Group,
    Principal,
    Accessory
}

export enum InvoiceItemTransactionType {
    Rental,
    Sale,
    Service
}

export interface ChargingPeriod {
    key: string,
    name: string,
    lead: boolean,
    percent: string,
    price: string,
    order: number,
    initial: boolean,
    count: number
}

export interface InvoiceItem {
    invoice_id: number,
    source_id: number | null,
    source_type: string,
    invoiceable_id: number,
    invoiceable_type: string,
    invoiceable_name:string,
    invoice_item_type: InvoiceItemType,
    invoice_item_type_name: string,
    name: string,
    description: string,
    transaction_type: InvoiceItemTransactionType,
    transaction_type_name: string,
    accessory_inclusion_type: AccessoryInclusionType,
    accessory_inclusion_type_name: string
    accessory_mode: AccessoryMode,
    accessory_mode_name: string,
    tax_class_id: number,
    revenue_group_id: number | null,
    rate_definition_id: number,
    service_rate_type: number,
    charge_starts_at: string,
    charge_ends_at: string,
    use_chargeable_days: boolean,
    chargeable_days: string,
    quantity: string
    price: string,
    discount_percent: string,
    id: number,
    path: string,
    charge_total: string,
    tax_total: string,
    unit_base_charge: string,
    taxable_charge_amount: string,
    tax_amount: string,
    charge_excluding_tax_total: string,
    charge_including_tax_total: string,
    custom_fields: [CustomField],
    charging_period: [ChargingPeriod]
}