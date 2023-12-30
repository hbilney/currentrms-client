import {Address, CustomField} from "./index";

export interface Venue {
    id: number,
    uuid: string,
    name: string,
    description: string,
    active: boolean,
    bookable: boolean,
    location_type: number, // TODO Probs an enum
    locale: string,
    day_cost: string,
    hour_cost: string,
    distance_cost: string,
    flat_rate_cost: string,
    membership_id: number, // TODO Probs an enum
    membership_type: string,
    lawful_basis_type_id: number,
    lawful_basis_type_name: string,
    sale_tax_class_id: number,
    sale_tax_class_name: string,
    purchase_tax_class_id: number,
    purchase_tax_class_name: string,
    tax_list: [[string]],
    custom_fields: [CustomField],
    icon_exists: boolean,
    mapping_id: number,
    created_at: string,
    updated_at: string
}

export interface Destination {
    id: number,
    source_id: number,
    source_type: string,
    address_id: number,
    address: Address,
}