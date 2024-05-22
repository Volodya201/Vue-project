import { IProduct } from "@/features/products/store/types"

interface IUser {
    username: string
    email: string
}

export interface IOrderItem {
    product_id: number,
    order_id?: number
    count: number
    product: IProduct
}

export interface IOrder {
    id: number,
    total_sum: number,
    user_id: number,
    user: IUser,
    order_items: []
}


export interface INewOrder {
    total_sum: any,
    user_id: number|null
    orderItems: IOrderItem[]
}