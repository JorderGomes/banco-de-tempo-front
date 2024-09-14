import { Schedule } from "./schedule";
import { Talent } from "./talent";
import { User } from "./user";

export interface Favor {
    id?: number,
    applicant: User,
    required: User,
    talent: Talent,
    schedule: Schedule,
    qtdHours: number,
    statusFavor: string
}
