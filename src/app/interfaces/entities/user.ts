import { Schedule } from "./schedule";

export interface User {
    id?: number,
    name: string,
    email: string,
    password: string,
    balance: number,
    schedules?: Schedule[],
    schedulesString?: string[]
}
