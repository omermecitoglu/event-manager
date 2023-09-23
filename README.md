# Event Manager

**EventManager** is a simple TypeScript class that provides event management capabilities. It allows you to easily handle and manage events within your JavaScript or TypeScript applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install EventManager via npm or yarn:

```bash
npm install @omermecitoglu/event-manager
```

or

```bash
yarn add @omermecitoglu/event-manager
```

## Usage

To use the EventManager class in your project, first import it:

```javascript
import EventManager from '@omermecitoglu/event-manager';
```

Then, create an instance of EventManager:

```javascript
const eventManager = new EventManager();
```

You can also provide a custom logger function when creating an instance:

```javascript
const customLogger = (...data) => {
  // Your custom logging logic here
};
const eventManager = new EventManager(customLogger);
```

Now, you can start using the EventManager to manage your events.

### Example

```javascript
// Subscribe to an event
function eventHandler() {
  console.log('Event triggered!');
}

eventManager.on('myEvent', eventHandler);

// Trigger the event
eventManager.trigger('myEvent');

// Unsubscribe from the event
eventManager.off('myEvent', eventHandler);
```

## API Reference

### `EventManager(logger?: (...data: unknown[]) => void)`

The constructor for the EventManager class. You can optionally provide a custom logger function.

### `getListeners(event: string)`

Get an array of listeners for a specific event.

- `event` (string): The name of the event.

### `on(event: string, fn: () => void)`

Subscribe to an event.

- `event` (string): The name of the event.
- `fn` (function): The event handler function.

### `off(event: string, fn: () => void)`

Unsubscribe from an event.

- `event` (string): The name of the event.
- `fn` (function): The event handler function to remove.

### `trigger(event: string, ...args: unknown[])`

Trigger an event, invoking all registered event handlers.

- `event` (string): The name of the event.
- `...args` (unknown[]): Any additional arguments to pass to the event handlers.

## Contributing

Contributions to this project are welcome! If you have suggestions, bug reports, or would like to contribute code, please visit the [GitHub repository](https://github.com/omermecitoglu/event-manager).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
