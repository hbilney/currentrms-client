import {CustomField, Member, OpportunityItem, StockLevel} from "./index";

export enum QuarantineType {
    Damaged = 1,
    Lost,
    "Supplier Return",
    "Sale Return",
    Service
}

export interface Quarantine {
    item_id: number,
    store_id: number,
    stock_level_id: number,
    reference: string,
    description: string,
    starts_at: string,
    ends_at: string,
    quantity: string,
    custom_fields: [CustomField],
    id: number,
    source_id: number,
    source_type: string,
    return_item_asset_id: number,
    supplier_id: number | null,
    quarantine_type: QuarantineType,
    name: string,
    quantity_out: string,
    active: boolean,
    created_at: string,
    updated_at: string,
    item: OpportunityItem,
    store: object, // TODO: Create Store Object
    stock_level: StockLevel,
    source: object, // TODO No Docs on this
    return_item_asset: object, //TODO No docs on this
    supplier: Member,
    quarantine_transactions: [] // TODO: Quarantine Transaction Type?
}