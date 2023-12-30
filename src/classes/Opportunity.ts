import {CurrentRMSClient, OpportunityItemResponse, OpportunityResponse} from "../index";

export class COpportunity {
    public item: COpportunityItem;

    constructor() {
        this.item = new COpportunityItem()
    }

    public async get(opportunity_id: string): Promise<OpportunityResponse> {
        const endpoint = `/opportunities/${opportunity_id}`
        try {
            return await CurrentRMSClient.fetchGet<OpportunityResponse>(endpoint)
        } catch (err) {
            return {errors: err} as OpportunityResponse
        }
    }

    public async items(opportunity_id: string): Promise<OpportunityItemResponse> {
        const endpoint = `/opportunities/${opportunity_id}/`
        try {
            return await CurrentRMSClient.fetchGet<OpportunityItemResponse>(endpoint)
        } catch (err) {
            return {errors: err} as OpportunityItemResponse
        }
    }

}

export class COpportunityItem {
    public async get(opportunity_id: string, item_id: string): Promise<OpportunityItemResponse> {
        const endpoint = `/opportunities/${opportunity_id}/opportunity_items/${item_id}`
        try {
            return await CurrentRMSClient.fetchGet<OpportunityItemResponse>(endpoint)
        } catch (err) {
            return {errors: err} as OpportunityItemResponse
        }
    }
}
