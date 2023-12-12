import {Member, OpportunityItemStatus, StockLevel} from "./index";

export interface OpportunityItemAsset {
    opportunity_item_id: number,
    stock_level_id: number,
    supplier_id: number | null,
    status: OpportunityItemStatus,
    quantity: string,
    quantity_allocated: string,
    quantity_returned: string,
    quantity_sold: string,
    container: string,
    id: number,
    stock_level_asset_number: string,
    stock_level_member_id: number | null,
    stock_level_member_work_email_address: string,
    status_name: string,
    stock_level: StockLevel,
    supplier: Member,
    has_shortage: boolean,
    sub_rent: boolean,
    opportunity_cost: object
}