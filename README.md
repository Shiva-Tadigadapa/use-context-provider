# use-context-provider

![npm](https://img.shields.io/npm/v/use-context-provider)

## Introduction

`use-context-provider` is a versatile npm package that facilitates the creation and management of global states using React's Context API. This package supports both JavaScript and TypeScript, allowing for easy integration into various React projects.

## Features

- **Supports JavaScript and TypeScript**: Provides compatibility for both languages.
- **Global State Management**: Simplifies the process of creating and managing global states.
- **Custom Hooks**: Includes custom hooks for state creation and management.
- **Easy Integration**: Seamlessly integrates with any React application.

## Installation

To install the `use-context-provider` package, use npm:

```bash
npm install use-context-provider
```

## Usage
### Javascript
Setting Up the Provider
Wrap your application with the `Provider` component to enable global state management.

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'use-context-provider';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Creating and Using Global States
Use the `NewState` hook to create and manage global states.

```bash
import React from 'react';
import { NewState, GetStates } from 'use-context-provider';

const MyComponent = () => {
  const [count, setCount] = NewState('count', 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

## TypeScript

Setting Up the Provider

Wrap your application with the `ProviderTSX` component to enable global state management.

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import { ProviderTSX } from 'use-context-provider';
import App from './App';

ReactDOM.render(
  <ProviderTSX>
    <App />
  </ProviderTSX>,
  document.getElementById('root')
);
```

Creating and Using Global States

Use the NewStateTSX hook to create and manage global states.

```bash
import React from 'react';
import { NewStateTSX } from 'use-context-provider';

const MyComponent: React.FC = () => {
  const [count, setCount] = NewStateTSX('count', 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

API

`Provider`
Wraps the application and provides the context for global state management.

`ProviderTSX`
TypeScript version of the Provider component.

`GetStates`
Returns the context value, which includes the state, createState, updateState, and getState functions.

`NewState`
Custom hook for creating and managing a new global state in JavaScript.

`NewStateTSX`
Custom hook for creating and managing a new global state in TypeScript.

## Contribution

Contributions are welcome! If you have any improvements or suggestions, please create an issue or submit a pull request.

* Fork the repository
* Create your feature branch (git checkout -b feature/your-feature)
* Commit your changes (git commit -m 'Add some feature')
* Push to the branch (git push origin feature/your-feature)
* Open a pull request
