import {ProductResponse, CurrentRMSClient, Product} from "../index";

export class CProduct {
    public async get(product_id: string): Promise<ProductResponse> {
        const endpoint = `/products/${product_id}`
        try {
            return await CurrentRMSClient.fetchGet<ProductResponse>(endpoint)
        } catch (err) {
            return {errors: err} as ProductResponse
        }
    }

    public async getAll(): Promise<ProductResponse> {
        const endpoint = `/products`
        try {
            return await CurrentRMSClient.fetchGet<ProductResponse>(endpoint)
        } catch (err) {
            return {errors: err} as ProductResponse
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