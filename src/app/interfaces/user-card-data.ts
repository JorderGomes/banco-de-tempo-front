export interface UserCardData {
    urlUserImage: string,
    userName: string,
    talentName: string,
    schedules: Map<string, number>,
    qtdHours?: number
}
