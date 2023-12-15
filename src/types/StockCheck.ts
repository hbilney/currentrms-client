import {AllowedStockType} from "./index";

export enum StockCheckStatus {
    Open,
    Submitted,
    Completed,
    Failed,
    Reverting,
    "Revert Failed",
    Cancelled = 9
}

export interface StockCheck {
    store_id: number,
    stock_check_at: string,
    item_id: number,
    product_group_id: number,
    allowed_stock_type: AllowedStockType,
    tag_filter: string,
    subject: string,
    status: StockCheckStatus,
    auto_return_bookings: boolean,
    id: number,
    created_at: string,
    updated_at: string
}

export interface StockCheckItem {
    stock_check_id: number,
    stock_level_id: number,
    quantity_counted: string,
    id: number,
    quantity_held: string,
    quantity_booked: string,
    quantity_available: string,
    created_at: string,
    updated_at: string
}