export enum CustomFieldType {
    "String",
    "Text",
    "Number",
    "Boolean",
    "DateTime",
    "Date",
    "Time",
    "Email",
    "Website",
    "List of Values",
    "Multi List of Values",
    "Auto Number",
    "Currency",
    "Telephone Number"
}

export interface CustomField {
    name: string,
    description: string,
    module_type: string,
    sort_order: number,
    field_type: CustomFieldType,
    list_name_id: number,
    custom_field_group_id: number,
    settings: object,
    id: number,
    document_layout_name: string,
    created_at: string,
    updated_at: string
}

// TODO: Not sure what the 'settings' object is...