import { expect } from "chai";
import sinon from "sinon";
import EventManager from "../src";

describe("EventManager", () => {
  let eventManager: EventManager;

  beforeEach(() => {
    eventManager = new EventManager(() => null);
  });

  it("should add an event listener with on()", () => {
    const event = "testEvent";
    const listener = () => {
      // do nothing.
    };
    eventManager.on(event, listener);
    expect(eventManager.getListeners(event)).to.include(listener);
  });

  it("should remove an event listener with off()", () => {
    const event = "testEvent";
    const listener = () => {
      // do nothing.
    };
    eventManager.on(event, listener);
    eventManager.off(event, listener);
    expect(eventManager.getListeners(event)).to.not.include(listener);
  });

  it("should trigger event listeners with trigger()", () => {
    const event = "testEvent";
    let count = 0;

    const listener1 = () => count++;
    const listener2 = () => count++;

    eventManager.on(event, listener1);
    eventManager.on(event, listener2);

    eventManager.trigger(event);

    expect(count).to.equal(2);
  });

  it("should handle exceptions in event listeners", () => {
    const event = "testEvent";

    const listener1 = () => {
      throw new Error("Listener 1 error");
    };

    const listener2 = () => {
      // This listener should still execute
    };

    eventManager.on(event, listener1);
    eventManager.on(event, listener2);

    const consoleErrorSpy = sinon.spy(eventManager, "logger" as keyof EventManager);

    eventManager.trigger(event);

    expect(consoleErrorSpy.calledOnce).to.be.true;

    // Restore the console.error spy
    consoleErrorSpy.restore();
  });

  it("should clean up empty event arrays with off()", () => {
    const event = "testEvent";
    const listener = () => {
      // do nothing.
    };

    eventManager.on(event, listener);
    expect(eventManager.getListeners(event)).to.exist;

    eventManager.off(event, listener);
    expect(eventManager.getListeners(event)).to.not.exist;
  });

  it("should remove all the event listeners with destroy()", () => {
    const event = "testEvent";
    const listener1 = () => {
      // do nothing.
    };
    const listener2 = () => {
      // do nothing.
    };

    eventManager.on(event, listener1);
    eventManager.on(event, listener2);

    eventManager.destroy();

    expect(eventManager.getListeners(event)).to.not.exist;
  });
});
