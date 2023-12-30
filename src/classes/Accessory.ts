import {Accessory, AccessoryResponse, CurrentRMSClient} from "../index";

export class CAccessory {
    public async get(accessory_id: string): Promise<AccessoryResponse> {
        const endpoint = `/accessories/${accessory_id}`
        try {
            return await CurrentRMSClient.fetchGet<AccessoryResponse>(endpoint)
        } catch (err) {
            return {errors: err} as AccessoryResponse
        }
    }

    public async getAll(): Promise<AccessoryResponse> {
        const endpoint = `/accessories`
        try {
            return await CurrentRMSClient.fetchGet<AccessoryResponse>(endpoint)
        } catch (err) {
            return {errors: err} as AccessoryResponse
        }
    }

    public async update(accessory_id: string, accessory: Accessory) {
        const endpoint = `/accessories/${accessory_id}`
        try {
            return await CurrentRMSClient.fetchPut(endpoint, accessory)
        } catch (err) {
            return err
        }
    }

    public async create(accessory: Accessory) {
        const endpoint = `/accessories`
        try {
            return await CurrentRMSClient.fetchPost(endpoint, accessory)
        } catch (err) {
            return err
        }
    }
}