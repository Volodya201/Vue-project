interface IProduct {
    id: number,
    title: string,
    price_original: number,
    discount: number,
    price_with_discount: number,
    category_id: number,
    label_id: number,
    consist: string,
    description: string
}

interface INewProduct {
    title: string,
    price_original: number,
    discount: number,
    category_id: number,
    label_id: number,
    consist: string,
    description: string
}