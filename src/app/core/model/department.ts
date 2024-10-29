import { User } from "./User";

export interface Department {
    urlImg: string;
    description: string;
    start: number;
    price: number;
    status?: string;
    owner: User;
    iLove?: boolean;
}