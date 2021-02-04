interface StageClient<Event> {
    send(events: Event[]): void
}

interface Downstream {
    get<T>(stageName: string): Promise<StageClient<T> | undefined>
}

export default interface Action<Event = any> {
    validate(event: any): event is Event
    handle(event: Event, downstream: Downstream): void | Promise<void>
    flush?(stageName: string, events: Event[]): number
}