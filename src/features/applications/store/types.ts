interface IUser {
    username: string,
    email: string
}

export interface IApplication {
    id: number,
    user: IUser,
    wish: string,
    checked: boolean,
    createdAt: string
}
export interface INewApplication {
    user_id: number | null,
    wish: string
}