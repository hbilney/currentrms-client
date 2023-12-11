export interface DiscountRuleMap {
    discount_rule_id: number,
    map_type: number,
    mappable_id: number,
    mappable_type: string,
    id: number
}

export interface DiscountRule {
    discount_category_id: number,
    starts_at: string,
    ends_at: string,
    quantity_from: string,
    quantity_to: string,
    percent: string,
    priority: number // INFO: Might change to 1 > 5 enum
    discount_rule_maps: [DiscountRuleMap],
    id: number
}

export interface DiscountCategory {
    name: string,
    active: boolean,
    discount_rules: [DiscountRule],
    id: number,
    created_at: string,
    updated_at: string
}