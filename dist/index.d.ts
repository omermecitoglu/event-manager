export default class EventManager {
    private list;
    constructor();
    private adjust;
    private cleanUp;
    on(event: string, fn: () => void): void;
    off(event: string, fn: () => void): void;
    trigger(event: string, ...args: unknown[]): void;
}
