export interface ListValue {
    list_name_id: number,
    name: string,
    default: boolean,
    colour_index: number,
    created_at: string,
    updated_at: string,
    id: number,
    system: boolean
}

export interface ListOfValues {
    name: string,
    has_colour: false,
    list_values: [ListValue],
    created_at: string,
    updated_at: string,
    id: number,
    system: boolean
}