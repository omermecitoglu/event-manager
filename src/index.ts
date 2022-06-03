export default class EventManager {
  private list: Record<string, Array<(...args: unknown[]) => void>>;

	constructor() {
		this.list = {};
	}

	private adjust(event: string) {
		if(!this.list[event]) {
			this.list[event] = [];
		}
	}

  private cleanUp(event: string) {
    if (!this.list[event].length) {
      delete this.list[event];
    }
  }

	on(event: string, fn: () => void) {
		this.adjust(event);
		const idx = this.list[event].indexOf(fn);
		if(idx < 0) this.list[event].push(fn);
	}

	off(event: string, fn: () => void) {
		this.adjust(event);
		const idx = this.list[event].indexOf(fn);
		if(idx > -1) this.list[event].splice(idx, 1);
    this.cleanUp(event);
	}

	trigger(event: string, ...args: unknown[]) {
		this.adjust(event);
		for(let fn of this.list[event]) {
			try {
				fn.apply(null, args);
			} catch(error) {
				console.log("event error: " + event + " <----------");
				console.error(error);
			}
		}
	}
}
