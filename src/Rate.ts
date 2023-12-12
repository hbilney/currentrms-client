export enum RateTransactionType {
    Rental = 1,
    Sale
}

export interface CategoryPrice {
    price: string,
    price_category_id: number,
    price_category_name: string
}

export interface Rate {
    store_id: number,
    transaction_type: RateTransactionType,
    rate_definition_id: number,
    rate_definition_name: string,
    starts_at: string,
    ends_at: string,
    price: string,
    category_prices: [CategoryPrice],
    id: number,
    store_name: string,
    transaction_type_name: string
}

export interface RateDefinition {
    id: number,
    rate_engine_id: number,
    name: string,
    config: object,
    rate_engine: RateEngine,
    created_at: string,
    updated_at: string
}

export interface RateEngine {
    id: number,
    name: string,
    description: string,
    lead_charge_period: string,
    config: object,
    created_at: string,
    updated_at: string
}