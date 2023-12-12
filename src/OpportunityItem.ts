import {AccessoryInclusionType, AccessoryMode, ChargingPeriod, CustomField} from "./index";

export enum OpportunityItemType {
    Group,
    Principal,
    Accessory
}

export enum OpportunityItemTransactionType {
    Rental = 1,
    Sale,
    Service
}

export enum ServiceRateType {
    Day = 1,
    Hour,
    Distance,
    Flat_Rate
}

export enum OpportunityItemStatus {
    Open,
    Provisional,
    "Provisionally Allocated",
    Reserved = 5,
    Allocated = 10,
    Prepared = 15,
    Confirmed = 15,
    "Booked Out" = 20,
    "Part Checked In" = 25,
    "Checked In" = 30,
    Mixed = 35,
    Completed = 40,
    Moved = 45,
    Cancelled = 50,
    Lost = 60,
    Dead = 70,
    Postponed= 80
}

export interface OpportunityItem {
    opportunity_id: number,
    item_id: number,
    item_type: string,
    opportunity_item_type: OpportunityItemType,
    name: string,
    transaction_type: OpportunityItemTransactionType,
    accessory_inclusion_type: AccessoryInclusionType,
    accessory_mode: AccessoryMode,
    quantity: string,
    revenue_group_id: number | null,
    rate_definition_id: number,
    service_rate_type: ServiceRateType,
    price: string,
    discount_percent: string,
    starts_at: string,
    ends_at: string,
    use_chargeable_days: boolean,
    chargeable_days: string,
    sub_rent: boolean,
    description: string,
    replacement_charge: string,
    weight: string,
    custom_fields: [CustomField],
    id: number,
    created_at: string,
    updated_at: string,
    opportunity_item_type_name: string,
    transaction_type_name: string,
    accessory_inclusion_type_name: string,
    accessory_mode_name: string,
    status: OpportunityItemStatus,
    status_name: string,
    service_rate_type_name: string,
    path: string,
    rental_charge_total: string,
    sale_charge_total: string,
    service_charge_total: string,
    surcharge_total: string,
    tax_total: string,
    original_rental_charge_total: string,
    original_sale_charge_total: string,
    original_service_charge_total: string,
    original_surcharge_total: string,
    original_tax_total: string,
    replacement_charge_total: string,
    weight_total: string,
    unit_base_total: string,
    unit_charge: string,
    charge_amount: string,
    taxable_charge_amount: string,
    tax_amount: string,
    surcharge_amount: string,
    charging_periods: [ChargingPeriod],
    charge_total: string,
    charge_total_including_children: string,
    weight_total_including_children: string,
    replacement_charge_total_including_children: string,
    lead_charging_period: ChargingPeriod,
    lead_charging_period_name: string,
    has_shortage: boolean,
    has_group_deal: boolean,
    is_in_deal: boolean
}