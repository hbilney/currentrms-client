export interface InvoiceDocumentData {
    header: string,
    body: string,
    footer: string,
    stylesheet: string
}

export interface InvoiceDocument {
    invoice_id: number,
    document_id: number,
    data: InvoiceDocumentData,
    created_at: string,
    updated_at: string,
    id: number
}