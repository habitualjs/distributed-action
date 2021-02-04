export interface StageClient<Event> {
    send(events: Event[]): void
}

export interface Downstream {
    get<T>(stageName: string): Promise<StageClient<T> | undefined>
}

export interface Action<Event = any> {
    validate(event: any): event is Event
    handle(event: Event, downstream: Downstream): void | Promise<void>
    flush?(stageName: string, events: Event[]): number
}

export default class {
    validate(event: any) {
        return true 
    }

    handle(event: Event, downstream: Downstream) {
        return
    }

    flush(stageName: string, events: Event[]) {
        return 0
    }
}