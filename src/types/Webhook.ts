export interface Webhook {
    name: string,
    event: string,
    target_url: string,
    active: boolean,
    id: number
}

export interface WebhookLog {
    id: number,
    webhook_id: number,
    response_code: number,
    response: string
}