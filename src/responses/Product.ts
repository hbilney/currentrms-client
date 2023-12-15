import {Product} from "../index";

export interface ProductResponse {
    product?: Product,
    products?: Product[],
    errors?: [string]
}