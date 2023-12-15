import {CustomField, Icon} from "./index";

export enum StockType {
    Rental = 1,
    Sale,
    Service
}

export enum StockCategory {
    "Non Stock Booking" = 10,
    "Bulk Stock" = 20,
    "Group Booking" = 30,
    "Sub Rent Booking" = 40,
    "Serialised Stock" = 50,
    "Resource Stock" = 60
}

export interface StockLevel {
    item_id: number,
    store_id: number,
    member_id: number | null,
    asset_number: string,
    serial_number: string,
    location: string,
    stock_type: StockType,
    stock_category: StockCategory,
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