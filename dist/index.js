"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.list = {};
    }
    EventManager.prototype.adjust = function (event) {
        if (!this.list[event]) {
            this.list[event] = [];
        }
    };
    EventManager.prototype.cleanUp = function (event) {
        if (!this.list[event].length) {
            delete this.list[event];
        }
    };
    EventManager.prototype.on = function (event, fn) {
        this.adjust(event);
        var idx = this.list[event].indexOf(fn);
        if (idx < 0)
            this.list[event].push(fn);
    };
    EventManager.prototype.off = function (event, fn) {
        this.adjust(event);
        var idx = this.list[event].indexOf(fn);
        if (idx > -1)
            this.list[event].splice(idx, 1);
        this.cleanUp(event);
    };
    EventManager.prototype.trigger = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.adjust(event);
        for (var _a = 0, _b = this.list[event]; _a < _b.length; _a++) {
            var fn = _b[_a];
            try {
                fn.apply(null, args);
            }
            catch (error) {
                console.log("event error: " + event + " <----------");
                console.error(error);
            }
        }
    };
    return EventManager;
}());
exports.default = EventManager;
