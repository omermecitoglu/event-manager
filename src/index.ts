export default class EventManager {
  private list: Record<string, Array<(...args: unknown[]) => void>>;
  logger: (...data: unknown[]) => void;

  constructor(logger?: (...data: unknown[]) => void) {
    this.list = {};
    this.logger = logger ?? console.error;
  }

  private adjust(event: string) {
    if (!this.list[event]) {
      this.list[event] = [];
    }
  }

  private cleanUp(event: string) {
    if (!this.list[event].length) {
      delete this.list[event];
    }
  }

  getListeners(event: string) {
    return this.list[event];
  }

  on(event: string, fn: () => void) {
    this.adjust(event);
    const idx = this.list[event].indexOf(fn);
    if (idx < 0) this.list[event].push(fn);
  }

  off(event: string, fn: () => void) {
    this.adjust(event);
    const idx = this.list[event].indexOf(fn);
    if (idx > -1) this.list[event].splice(idx, 1);
    this.cleanUp(event);
  }

  trigger(event: string, ...args: unknown[]) {
    this.adjust(event);
    for (const fn of this.list[event]) {
      try {
        fn(...args);
      } catch (error) {
        this.logger(error);
      }
    }
  }
}
