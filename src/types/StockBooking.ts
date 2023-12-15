export enum BookingMask {
    None,
    Manual,
    Opportunity,
    "To Stock" = 4,
    "Write Off" = 8
}

export interface StockBooking {
    item_id: number,
    store_id: number,
    stock_level_id: number,
    member_id: number,
    booking_id: number,
    booking_type: string,
    booking_mask: BookingMask,
    opportunity_id: number,
    return_item_asset_id: number,
    firm: boolean,
    sub_rent: boolean,
    active: boolean,
    starts_at: string,
    ends_at: string,
    quantity: number,
    container_stock_level_id: number,
    id: number
}