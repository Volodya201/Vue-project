export interface IAlert {
    type: string,
    header: string,
    message: string,
    createdAt: number
}

export interface INewAlert {
    type: string,
    header: string,
    message: string
}