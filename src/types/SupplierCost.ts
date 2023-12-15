export enum SupplierCostTransactionType {
    'Sub-Rental' = 1,
    Purchase
}

export interface SupplierCost {
    price: number,
    rate_definition_id: number,
    id: number,
    item_id: number,
    member_id: number,
    member_name: string,
    transaction_type: SupplierCostTransactionType,
    transaction_type_name: string,
    rate_definition_name: string
}