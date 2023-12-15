import {CustomField, Icon} from "./index";

export interface VehicleMembership {
    id: number,
    plate: string,
    payload: string,
    volume: string,
    width: string,
    height: string,
    length: string
}


export interface Vehicle {
    name: string,
    membership_type: string,
    description: string,
    active: boolean,
    bookable: boolean,
    tag_list: [[string]],
    custom_fields: [CustomField],
    membership: VehicleMembership,
    id: number,
    uuid: string,
    membership_id: number,
    created_at: string,
    updated_at: string,
    icon: Icon
}