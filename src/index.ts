type EventListener<T = unknown> = (...args: T[]) => void;

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

  on<T>(eventName: string, listener: EventListener<T>) {
    this.adjust(eventName);
    const idx = this.list[eventName].indexOf(listener);
    if (idx < 0) this.list[eventName].push(listener);
  }

  off<T>(eventName: string, listener: EventListener<T>) {
    this.adjust(eventName);
    const idx = this.list[eventName].indexOf(listener);
    if (idx > -1) this.list[eventName].splice(idx, 1);
    this.cleanUp(eventName);
  }

  trigger<T>(eventName: string, ...args: T[]) {
    this.adjust(eventName);
    for (const fn of this.list[eventName]) {
      try {
        fn(...args);
      } catch (error) {
        this.logger(error);
      }
    }
  }

  destroy() {
    for (const eventName of Object.keys(this.list)) {
      const listeners = this.list[eventName].slice();
      for (const listener of listeners) {
        this.off(eventName, listener);
      }
    }
  }
}
