import {CustomField, Icon} from "./index";

export interface StockLevel {
    item_id: number,
    store_id: number,
    member_id: number | null,
    asset_number: string,
    serial_number: string,
    location: string,
    stock_type: number,
    stock_category: number,
    quantity_held: string,
    quantity_allocated: string,
    quantity_unavailable: string,
    quantity_on_order: string,
    starts_at: string,
    ends_at: string,
    icon: Icon,
    custom_fields: [CustomField],
    id: number,
    item_name: string,
    store_name: string,
    stock_type_name: string,
    stock_category_name: string,
    container_stock_level_id: number,
    container_mode: number
}