"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager(logger) {
        this.list = {};
        // eslint-disable-next-line no-console
        this.logger = logger !== null && logger !== void 0 ? logger : console.error;
    }
    EventManager.prototype.adjust = function (eventName) {
        if (!this.list[eventName]) {
            this.list[eventName] = [];
        }
    };
    EventManager.prototype.cleanUp = function (eventName) {
        if (!this.list[eventName].length) {
            delete this.list[eventName];
        }
    };
    EventManager.prototype.on = function (eventName, listener) {
        this.adjust(eventName);
        var idx = this.list[eventName].indexOf(listener);
        if (idx < 0)
            this.list[eventName].push(listener);
    };
    EventManager.prototype.off = function (eventName, listener) {
        this.adjust(eventName);
        var idx = this.list[eventName].indexOf(listener);
        if (idx > -1)
            this.list[eventName].splice(idx, 1);
        this.cleanUp(eventName);
    };
    EventManager.prototype.trigger = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.adjust(eventName);
        for (var _a = 0, _b = this.list[eventName]; _a < _b.length; _a++) {
            var fn = _b[_a];
            try {
                fn.apply(void 0, args);
            }
            catch (error) {
                this.logger(error);
            }
        }
    };
    EventManager.prototype.destroy = function () {
        for (var _i = 0, _a = Object.keys(this.list); _i < _a.length; _i++) {
            var eventName = _a[_i];
            var listeners = this.list[eventName].slice();
            for (var _b = 0, listeners_1 = listeners; _b < listeners_1.length; _b++) {
                var listener = listeners_1[_b];
                this.off(eventName, listener);
            }
        }
    };
    return EventManager;
}());
exports.default = EventManager;
