# Event Manager

[![npm version](https://img.shields.io/npm/v/@omer-x/event-manager?logo=npm&logoColor=CB3837&color=CB3837)](https://www.npmjs.com/package/@omer-x/event-manager)
[![npm downloads](https://img.shields.io/npm/dm/@omer-x/event-manager?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDI0Mi43LTczLjQtNzMuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTI4IDEyOGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwxMjgtMTI4YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDI4OCAyNzQuNyAyODggMzJ6TTY0IDM1MmMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAzMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0xMDEuNSAwLTQ1LjMgNDUuM2MtMjUgMjUtNjUuNSAyNS05MC41IDBMMTY1LjUgMzUyIDY0IDM1MnptMzY4IDU2YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiIGZpbGw9IiMwMDc4MjAiIC8+PC9zdmc+&color=007820)](https://www.npmjs.com/package/@omer-x/event-manager)
[![codecov](https://codecov.io/gh/omermecitoglu/event-manager/branch/main/graph/badge.svg)](https://codecov.io/gh/omermecitoglu/event-manager)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTM4NCAzMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzOTguNCA5NmMtNS4yIDI1LjgtMjIuOSA0Ny4xLTQ2LjQgNTcuM0wzNTIgNDQ4bDE2MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xOTIgMC0xOTIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNjAgMCAwLTI5NC43Yy0yMy41LTEwLjMtNDEuMi0zMS42LTQ2LjQtNTcuM0wxMjggOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTI4IDBjMTQuNi0xOS40IDM3LjgtMzIgNjQtMzJzNDkuNCAxMi42IDY0IDMyem01NS42IDI4OGwxNDQuOSAwTDUxMiAxOTUuOCA0MzkuNiAzMjB6TTUxMiA0MTZjLTYyLjkgMC0xMTUuMi0zNC0xMjYtNzguOWMtMi42LTExIDEtMjIuMyA2LjctMzIuMWw5NS4yLTE2My4yYzUtOC42IDE0LjItMTMuOCAyNC4xLTEzLjhzMTkuMSA1LjMgMjQuMSAxMy44bDk1LjIgMTYzLjJjNS43IDkuOCA5LjMgMjEuMSA2LjcgMzIuMUM2MjcuMiAzODIgNTc0LjkgNDE2IDUxMiA0MTZ6TTEyNi44IDE5NS44TDU0LjQgMzIwbDE0NC45IDBMMTI2LjggMTk1Ljh6TS45IDMzNy4xYy0yLjYtMTEgMS0yMi4zIDYuNy0zMi4xbDk1LjItMTYzLjJjNS04LjYgMTQuMi0xMy44IDI0LjEtMTMuOHMxOS4xIDUuMyAyNC4xIDEzLjhsOTUuMiAxNjMuMmM1LjcgOS44IDkuMyAyMS4xIDYuNyAzMi4xQzI0MiAzODIgMTg5LjcgNDE2IDEyNi44IDQxNlMxMS43IDM4MiAuOSAzMzcuMXoiIGZpbGw9IiNEMEE4MUMiIC8+PC9zdmc+)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/omermecitoglu/event-manager?color=c977be&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTMyMCAzMzZhODAgODAgMCAxIDAgMC0xNjAgODAgODAgMCAxIDAgMCAxNjB6bTE1Ni44LTQ4QzQ2MiAzNjEgMzk3LjQgNDE2IDMyMCA0MTZzLTE0Mi01NS0xNTYuOC0xMjhMMzIgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDEzMS4yIDBDMTc4IDE1MSAyNDIuNiA5NiAzMjAgOTZzMTQyIDU1IDE1Ni44IDEyOEw2MDggMjI0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xMzEuMiAweiIgZmlsbD0iI0M5NzdCRSIgLz48L3N2Zz4=)](https://github.com/omermecitoglu/event-manager/commits/main/)
[![GitHub issues](https://img.shields.io/github/issues/omermecitoglu/event-manager?color=a38eed&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4KICA8cGF0aCBkPSJNOCA5LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNaIiBmaWxsPSIjQTM4RUVEIj48L3BhdGg+CiAgPHBhdGggZD0iTTggMGE4IDggMCAxIDEgMCAxNkE4IDggMCAwIDEgOCAwWk0xLjUgOGE2LjUgNi41IDAgMSAwIDEzIDAgNi41IDYuNSAwIDAgMC0xMyAwWiIgZmlsbD0iI0EzOEVFRCI+PC9wYXRoPgo8L3N2Zz4=)](https://github.com/omermecitoglu/event-manager/issues)
[![GitHub stars](https://img.shields.io/github/stars/omermecitoglu/event-manager?style=social)](https://github.com/omermecitoglu/event-manager)

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
