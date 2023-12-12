import {Attachment, CustomField, Icon, TaxClass, RevenueGroup} from "./index";


export interface Service {
    name: string,
    tag_list: [[string]],
    description: string,
    active: boolean,
    track_shortages: boolean,
    tax_class_id: number,
    service_revenue_group_id: number,
    internal_service_cost_group_id: number,
    external_service_cost_group_id: number,
    day_price: string,
    hour_price: string,
    distance_price: string,
    flat_rate_price: string,
    day_cost: string,
    hour_cost: string,
    distance_cost: string,
    flat_rate_cost: string,
    custom_fields: [CustomField],
    id: number,
    created_at: string,
    updated_at: string,
    tax_class: TaxClass,
    service_type: object, // TODO no docs
    icon: Icon,
    service_revenue_group: RevenueGroup,
    internal_service_cost_group: object,
    external_service_cost_group: object,
    attachments: [Attachment]
}