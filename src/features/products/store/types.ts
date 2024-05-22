export interface IProduct {
    id: number,
    title: string,
    url_image: string,
    price_original: number,
    discount: number,
    price_with_discount: number,
    category_id: number,
    label_id: number,
    consist: string,
    description: string
}

export interface INewProduct {
    title: string,
    url_image: string,
    price_original: number | null,
    discount: number | null,
    category_id: number | null,
    //label_id: number | null,
    consist: string,
    description: string
}