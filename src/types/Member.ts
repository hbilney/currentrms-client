import {CustomField} from "./index";

export interface Address {
    name: string,
    street: string,
    postcode: string,
    city: string,
    county: string,
    country_id: string,
    country_name: string,
    type_id: number,
    address_type_name: string,
    created_at: string,
    updated_at: string
    id: number
}

export interface Email {
    address: string,
    type_id: number,
    email_type_name: string,
    id: number
}

export interface Phone {
    number: string,
    type_id: number,
    phone_type_name: string,
    id: number
}

export interface Link {
    address: string,
    type_id: number,
    link_type_name: string,
    id: number
}

export interface Icon {
    iconable_id: number,
    id: number,
    image_file_name: string,
    url: string,
    thumb_url: string,
    created_at: string,
    updated_at: string,
    iconable_type: string
}

export interface ServiceStockLevel {
    item_id: number,
    store_id: number,
    member_id: number,
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
    stock_category_name: string
}

export interface Member {
    name: string,
    description: string,
    active: boolean,
    bookable: boolean,
    location_type: number,
    locale: string,
    membership_type: string,
    lawful_basis_type_id: number,
    sale_tax_class_id: number,
    purchase_tax_class_id: number,
    tag_list: [[string]],
    custom_fields: [CustomField],
    membership: object,
    primary_address: Address,
    emails: [Email],
    phones: [Phone],
    links: [Link],
    addresses: [Address],
    service_stock_levels: [ServiceStockLevel],
    day_cost: string,
    hour_cost: string,
    distance_cost: string,
    flat_rate_cost: string,
    id: number,
    uuid: string,
    membership_id: number,
    lawful_basis_type_name: string,
    sale_tax_class_name: string,
    purchase_tax_class_name: string,
    created_at: string,
    updated_at: string,
    icon: Icon,
    child_members: [] //Array of linked contact objects
    parent_members: [] //Array of linked organisation or venue object
}

// TODO: See comments above