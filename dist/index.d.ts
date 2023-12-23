type EventListener = (...args: unknown[]) => void;
export default class EventManager {
    private list;
    private logger;
    constructor(logger?: (...data: unknown[]) => void);
    private adjust;
    private cleanUp;
    on(eventName: string, listener: EventListener): void;
    off(eventName: string, listener: EventListener): void;
    trigger(eventName: string, ...args: unknown[]): void;
    destroy(): void;
}
export {};
