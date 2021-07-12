class EventManager {

	constructor() {
		this.list = {};
	}

	adjust(event) {
		if(!this.list[event]) {
			this.list[event] = [];
		}
	}

	on(event, fn) {
		this.adjust(event);
		const idx = this.list[event].indexOf(fn);
		if(idx < 0) this.list[event].push(fn);
	}

	off(event, fn) {
		this.adjust(event);
		const idx = this.list[event].indexOf(fn);
		if(idx > -1) this.list[event].splice(idx, 1);
	}

	trigger(event, ...args) {
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

module.exports = EventManager;
