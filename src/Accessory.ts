export enum ParentTransactionType {
    Both,
    Rental,
    Sale
}

export enum ItemTransactionType {
    Rental = 1,
    Sale = 2
}

export enum AccessoryInclusionType {
    Default,
    Mandatory,
    Optional,
    Manual = 99
}

export enum AccessoryMode {
    Accessory,
    Safety,
    Component
}

export interface Accessory {
    related_id: number,
    related_type: string,
    parent_transaction_type: ParentTransactionType,
    item_transaction_type: ItemTransactionType
    inclusion_type: AccessoryInclusionType
    mode: AccessoryMode,
    quantity: string,
    zero_priced: boolean,
    sort_order: number,
    id: number,
    relatable_id: number,
    relatable_type: string,
    related_name: string,
    related_icon_url: string,
    related_icon_thumb_url: string,
    type: string,
    parent_transaction_type_name: string,
    item_transaction_type_name: string,
    inclusion_type_name: string,
    mode_name: string,
    created_at: string,
    updated_at: string
}