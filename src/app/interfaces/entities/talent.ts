import { User } from "./user";

export interface Talent {
    id?: number,
    name: string,
    description: string,
    category: string, 
    user: User
}
