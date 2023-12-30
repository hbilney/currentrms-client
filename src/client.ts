import {CAccessory, CProduct, COpportunity} from "./index";

export class CurrentRMSClient {
    private apiVersion: string
    private static apiKey: string
    private static apiBaseUrl: string
    private static subdomain: string
    public accessory: CAccessory;
    // public action: CAction;
    // public activity: CActivity;
    // public attachment: CAttachment;
    // public discussionComment: CDiscussionComment;
    // public costGroup: CCostGroup;
    // public country: CCountry;
    // public customFieldGroup: CCustomFieldGroup;
    // public customField: CCustomField;
    // public discountCategory: CDiscountCategory;
    // public discussion: CDiscussion;
    // public document: CDocument;
    // public inspection: CInspection;
    // public inspectionResult: CInspectionResult;
    // public invoice: CInvoice;
    // public invoiceItem: CInvoiceItem;
    // public invoiceDocument: CInvoiceDocument;
    // public invoiceTransaction: CInvoiceTransaction; TODO: Add these to invoice class.
    // public listOfValues: CListOfValues;
    // public member: CMember;
    public opportunity: COpportunity;
    // public opportunityCost: COpportunityCost;
    // public opportunityItem: COpportunityItem;
    // public opportunityItemAsset: COpportunityItemAsset;
    // public opportunityDocument: COpportunityDocument; TODO: Add these to opportunity class
    // public organisationTaxClass: COrganisationTaxClass;
    // public productGroup: CProductGroup;
    public product: CProduct;
    // public productAvailability: CProductAvailability;
    // public productInventory: CProductInventory;
    // public productRevenue: CProductRevenue;
    // public productTaxClass: CProductTaxClass; TODO: Add these to product class.
    // public project: CProject;
    // public projectDocument: CProjectDocument; TODO: Add this to project class.
    // public purchaseOrder: CPurchaseOrder;
    // public purchaseOrderDocument: CPurchaseOrderDocument; TODO: Add this to PO Class.
    // public quarantine: CQuarantine;
    // public rate: CRate;
    // public rateDefinition: CRateDefinition;
    // public serialisedComponent: CSerialisedComponent;
    // public service: CService;
    // public serviceResource: CServiceResource;
    // public stockBooking: CStockBooking;
    // public stockCheck: CStockCheck;
    // public stockCheckItem: CStockCheckItem;
    // public stockLevel: CStockLevel;
    // public serviceStockLevel: CServiceStockLevel;
    // public stockTransaction: CStockTransaction;
    // public storeTransfer: CStoreTransfer;
    // public store: CStore;
    // public supplierCost: CSupplierCost;
    // public vehicle: CVehicle;
    // public webhook: CWebhook;
    // public webhookLog: CWebhookLog; TODO: Add to Webhook class.
    // public tagCloud: CTagCloud;

    constructor(apiVersion: string, apiKey: string, subdomain: string) {
        this.apiVersion = apiVersion
        CurrentRMSClient.apiKey = apiKey
        CurrentRMSClient.apiBaseUrl = `https://api.current-rms.com/api/v${this.apiVersion}`
        CurrentRMSClient.subdomain = subdomain

        this.accessory = new CAccessory()
        this.product = new CProduct()
        this.opportunity = new COpportunity()
    }

    static async fetchGet<T>(endpoint: string, init?: RequestInit): Promise<T> {
        const url = `${this.apiBaseUrl}${endpoint}`

        try {
            const response = await fetch(url, {
                ...init,
                headers: {
                    ...init?.headers,
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': this.apiKey,
                    'X-SUBDOMAIN': this.subdomain
                },
                method: 'GET'
            })
            return (await response.json()) as T;
        } catch (err) {
            console.error(err)
            return err as T
        }
    }

    static async fetchPost<T>(endpoint: string, data: T, init?: RequestInit): Promise<T> {
        const url = `${this.apiBaseUrl}${endpoint}`

        try {
            const response = await fetch(url, {
                ...init,
                headers: {
                    ...init?.headers,
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': this.apiKey,
                    'X-SUBDOMAIN': this.subdomain
                },
                method: 'POST',
                body: JSON.stringify(data)
            })
            return (await response.json()) as T;
        } catch (err) {
            console.error(err)
            throw err as T
        }
    }

    static async fetchPut<T>(endpoint: string, data: T, init?: RequestInit): Promise<T> {
        const url = `${this.apiBaseUrl}${endpoint}`

        try {
            const response = await fetch(url, {
                ...init,
                headers: {
                    ...init?.headers,
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': this.apiKey,
                    'X-SUBDOMAIN': this.subdomain
                },
                method: 'PUT',
                body: JSON.stringify(data)
            })
            return (await response.json()) as T;
        } catch (err) {
            console.error(err)
            throw err as T
        }
    }

    static async fetchDelete<T>(endpoint: string, init?: RequestInit): Promise<T> {
        const url = `${this.apiBaseUrl}${endpoint}`

        try {
            const response = await fetch(url, {
                ...init,
                headers: {
                    ...init?.headers,
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': this.apiKey,
                    'X-SUBDOMAIN': this.subdomain
                },
                method: 'DELETE'
            })
            return (await response.json()) as T;
        } catch (err) {
            console.error(err)
            throw err as T
        }
    }
}

