import {StockLevel} from "./index";

export interface ServiceResource {
    day_cost: number,
    hour_cost: number,
    distance_cost: number,
    flat_rate_cost: number,
    service_id: number,
    service_name: string,
    member_id: number,
    member_name: string,
    resource_stock_levels: [StockLevel]
}