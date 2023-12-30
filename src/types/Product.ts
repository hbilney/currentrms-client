import {Accessory, Attachment, CustomField, TaxClass, Icon, ServiceRateType, Inspection, Rate} from "./index";


export interface ProductGroup {
    name: string,
    description: string,
    custom_fields: [CustomField],
    id: number,
    icon: Icon,
    created_at: string,
    updated_at: string
}

export enum AllowedStockType {
    All,
    Rental,
    Sale
}

export enum StockMethod {
    None,
    Bulk,
    Serialised
}

export interface RevenueGroup {
    name: string,
    description: string,
    active: boolean,
    id: number
}

export interface Product {
    name: string,
    tag_list: [[string]],
    description: string,
    allowed_stock_type: AllowedStockType,
    stock_method: StockMethod,
    buffer_percent: string,
    post_rent_unavailability: number,
    replacement_charge: string,
    weight: string,
    barcode: string,
    active: boolean,
    accessory_only: boolean,
    discountable: boolean,
    rental_rate: object,
    sale_rate: object,
    product_group_id: number,
    tax_class_id: number,
    rental_revenue_group_id: number,
    sale_revenue_group_id: number,
    sub_rental_cost_group_id: number,
    sub_rental_price: number,
    sub_rental_rate_definition_id: number,
    purchase_cost_group_id: number,
    purchase_price: number,
    assigned_inspection_ids: [number],
    custom_fields: [CustomField],
    id: string,
    allowed_stock_type_name: string,
    stock_method_name: string,
    product_group: ProductGroup,
    tax_class: TaxClass,
    icon: Icon,
    rental_revenue_group: RevenueGroup,
    sale_revenue_group: RevenueGroup,
    sub_rental_cost_group: RevenueGroup,
    purchase_cost_group: RevenueGroup,
    accessories: [Accessory],
    alternative_products: [Product],
    attachments: [Attachment],
    product_surcharges: [],
    rental_rates: [Rate], // TODO: This is an array of objects
    sale_rates: [Rate], // TODO: This is an array of objects
    item_inspections: [Inspection], // TODO: This is an array of objects
    created_at: string,
    updated_at: string
}

export interface ProductAvailability {
    product_id: number,
    product_name: string,
    stock_method: StockMethod,
    buffer_percent: string,
    availability_period: number,
    starts_at: string,
    ends_at: string,
    store_quantity_held: [],
    quantity_held: [],
    quantity_booked: [],
    quantity_unavailable: [],
    quantity_available: [],
    quantity_sub_rent: [],
    quantity_quoted: [],
    quantity_post_rent: []
}

export interface StoreQuantity {
    store_id: number,
    rental_quantity_held: string,
    rental_quantity_unavailable: string,
    rental_quantity_booked: string,
    rental_quantity_sub_rent: string,
    rental_quantity_available: string,
    sale_quantity_held: string,
    sale_quantity_unavailable: string,
    sale_quantity_allocated: string,
    sale_quantity_available: string
}

export interface ProductInventories {
    id: number,
    name: string,
    description: string,
    icon_url: string,
    icon_thumb_url: string,
    product_group_name: string,
    product_group_id: number,
    rental_allowed: boolean,
    can_rent: boolean,
    has_stock: boolean,
    store_id: number,
    rental_quantity_held: string,
    rental_quantity_unavailable: string,
    rental_quantity_booked: string,
    rental_quantity_sub_rent: string,
    rental_quantity_available: string,
    rental_rate_exists: boolean,
    rental_price: string,
    rental_lead_charge_period_name: string,
    sale_allowed: boolean,
    sale_quantity_held: string,
    sale_quantity_unavailable: string,
    sale_quantity_allocated: string,
    sale_quantity_available: string,
    sale_price: string,
    stock_method: StockMethod,
    stock_method_name: string,
    buffer_percent: string,
    replacement_charge: string,
    weight: string,
    barcode: string,
    active: boolean,
    accessory_only: boolean,
    discountable: boolean,
    tax_class_id: TaxClass,
    rental_revenue_group_id: number,
    sale_revenue_group_id: number,
    sub_rental_cost_group_id: number,
    purchase_cost_group_id: number,
    store_quantities: [StoreQuantity],
    custom_fields: [CustomField]
}

export enum RevenueType {
    Rental = 1,
    Sale,
    Surcharge,
    Service
}

export interface ProductRevenue {
    id: number,
    item_id: number,
    store_id: number,
    stock_level_id: number,
    revenue_group_id: number,
    surcharge_id: number,
    member_id: number,
    invoice_id: number,
    invoice_item_origin_id: number,
    source_id: number,
    source_type: string,
    ordered_at: string,
    invoiced_at: string,
    charge_starts_at: string,
    charge_ends_at: string,
    use_chargeable_days: boolean,
    chargeable_days: number,
    service_rate_type: ServiceRateType,
    revenue_type: RevenueType,
    quantity: number,
    amount: string,
    created_at: string,
    updated_at: string
}

export interface ProductResponse {
    product: Product,
    products: Product[],
    errors: [string]
}