import {Product, ProductResponse} from "./index";

interface Response {
    status: number,
    data: {}
}

export class CurrentRMSClient {
    private apiVersion: string
    private static apiKey: string
    private static apiBaseUrl: string
    private static subdomain: string
    public product: Products;

    constructor(apiVersion: string, apiKey: string, subdomain: string) {
        this.apiVersion = apiVersion
        CurrentRMSClient.apiKey = apiKey
        CurrentRMSClient.apiBaseUrl = `https://api.current-rms.com/api/v${this.apiVersion}`
        CurrentRMSClient.subdomain = subdomain

        this.product = new Products()
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
            return err
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
            throw err
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
            throw err
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
            throw err
        }
    }
}

class Products {
    public async get(product_id: string) {
        const endpoint = `/products/${product_id}`
        try {
            const res = await CurrentRMSClient.fetchGet<ProductResponse>(endpoint)
            if (res.product) return res.product
            if (res.errors) return res.errors
        } catch (err) {
            return err
        }
    }

    public async getAll() {
        const endpoint = `/products`
        try {
            const res = await CurrentRMSClient.fetchGet<ProductResponse>(endpoint)
            if (res.products) return res.products
            if (res.errors) return res.errors
        } catch (err) {
            return err
        }
    }

    public async create(product: Product) {
        const endpoint = `/products`
        try {
            return await CurrentRMSClient.fetchPost(endpoint, product)
        } catch (err) {
            return err
        }
    }

    public async update(product_id: number, product: Product) {
        const endpoint = `/products/${product_id}`
        try {
            return await CurrentRMSClient.fetchPut(endpoint, product)
        } catch (err) {
            return err
        }
    }

    public async delete(product_id: number) {
        const endpoint = `/products/${product_id}`
        try {
            return await CurrentRMSClient.fetchDelete(endpoint)
        } catch (err) {
            return err
        }
    }

    public async clone(product_id: string) {
        const endpoint = `/products/${product_id}/clone`
        try {
            const res = await CurrentRMSClient.fetchGet<ProductResponse>(endpoint)
            if (res.product) return res.product
            if (res.errors) return res.errors
        } catch (err) {
            return err
        }
    }

    // TODO: Prepare Document & Prepare Document PDF
}