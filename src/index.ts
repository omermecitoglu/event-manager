type EventListener = (...args: unknown[]) => void;

export default class EventManager {
  private list: Record<string, EventListener[]>;
  private logger: (...data: unknown[]) => void;

  constructor(logger?: (...data: unknown[]) => void) {
    this.list = {};
    // eslint-disable-next-line no-console
    this.logger = logger ?? console.error;
  }

  private adjust(eventName: string) {
    if (!this.list[eventName]) {
      this.list[eventName] = [];
    }
  }

  private cleanUp(eventName: string) {
    if (!this.list[eventName].length) {
      delete this.list[eventName];
    }
  }

  getListeners(eventName: string) {
    return this.list[eventName];
  }

  on(eventName: string, listener: EventListener) {
    this.adjust(eventName);
    const idx = this.list[eventName].indexOf(listener);
    if (idx < 0) this.list[eventName].push(listener);
  }

  off(eventName: string, listener: EventListener) {
    this.adjust(eventName);
    const idx = this.list[eventName].indexOf(listener);
    if (idx > -1) this.list[eventName].splice(idx, 1);
    this.cleanUp(eventName);
  }

  trigger(eventName: string, ...args: unknown[]) {
    this.adjust(eventName);
    for (const fn of this.list[eventName]) {
      try {
        fn(...args);
      } catch (error) {
        this.logger(error);
      }
    }
  }
}
