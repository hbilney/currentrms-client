export enum InvoiceTransactionType {
    Payment = 4,
    Refund = 5
}

export interface InvoiceTransaction {
    member_id: number,
    opportunity_id: number,
    invoice_id: number,
    transaction_type: InvoiceTransactionType,
    transaction_at: string,
    payment_method_id: number,
    reference: string,
    amount: string,
    id: number,
    transaction_type_name: string,
    payment_method_name: string,
    member: object
}

// TODO: Need to add the member object when created