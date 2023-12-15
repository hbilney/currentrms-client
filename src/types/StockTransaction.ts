export enum StockTransactionType {
    Opening = 1,
    Increase,
    Decrease,
    Buy,
    Find,
    Write_Off,
    Sell,
    Return,
    Make,
    "Transfer Out",
    "Transfer In"
}

export interface StockTransaction {
    transaction_at: string,
    quantity: string,
    description: string,
    id: number,
    stock_level_id: number,
    store_id: number,
    source_id: number,
    source_type: string,
    transaction_type: StockTransactionType,
    transaction_type_name: string,
    quantity_move: string,
    manual: boolean,
    created_at: string,
    updated_at: string
}