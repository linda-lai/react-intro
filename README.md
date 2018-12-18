# React
Notes and practice creating and testing components in React.

|[![Linda Lai](assets/contributors-linda-lai-70x70.jpg)](https://github.com/linda-lai) |
|-----------|
| Linda Lai |

## Portfolio Challenge
Make a simple portfolio HTML page using stateless functional components.

## Resources
* React: https://reactjs.org/
* Babel: https://babeljs.io/
* create-react-app: https://github.com/facebook/create-react-app

## Summary
React is a JavaScript library for building user interfaces.

* *Declarative*: Create interactive UIs by designing simple views for each state in an application, and React will efficiently update and render just the right components when data changes. Declarative views make  code more predictable, simpler to understand, and easier to debug.

* *Component-Based*: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, it can easily pass rich data through your app and keep state out of the DOM.

* *Learn Once, Write Anywhere*: React doesn't make assumptions about the rest of the technology stack, so new features can be developed in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## Installation
### Using CDN
In `index.html`, the React CDN library can be called directly into HTML files without additional packages like below:
```html
<script crossorigin src=
    "https://unpkg.com/react@16/umd/react.development.js">
</script>

<script crossorigin src=
    "https://unpkg.com/react-dom@16/umd/react-dom.development.js">
</script>

<script src=
    "./app.js">
</script>
```

### Using create-react-app in Terminal
To create a new application in React:

#### Using npx
```
$ npx create-react-app [project-name]
$ cd [project-name]
$ npm start
```

#### Using npm init <initializer>
To install all required dependencies (as listed in `package.json` file):
```
$ npm init react-app [project-name]
```

It will create a directory called `project-name`.

Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
project-name
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

Initialise a new json.package file:
```
$ npm init
```

To open development server:
```
$ npm start
```

Open http://localhost:3000 to view it in the browser.

* `App.js` will contain the main logic for the rest of the views in an application.
* JSX should be written in an external component that is called into the `App.js` files.
* Keep additional logic out of components modules (e.g. array iteration); separation of functions and concerns.
* Only ternary expressions can be used in App.js file (will not take if statements).

## React Elements
Any time React components are created and declared, components must start with uppercase, otherwise will assume it is a <HTML> renderable element in lowercase.

React renders an JavaScript object into HTML - doesn't create a real DOM node, but 'describes' DOM nodes. Everything rendered inside the root DOM element is managed through the `ReactDOM.render()` function in the `index.js` file:

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

React components are anchored to the main `root` container in the main HTML file:
```html
    <div id='root'></div>
```

### Using React.createElement()
Without JSX, the structure of React elements in JavaScript:

```js
const [name] = React.createElement(
//     [HTML],
//     [props - i.e. [name].props],
//     [child, i.e. [name].props.children],
//     Anything rendered after second argument will be considered a child 
)

const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is the title.'},
    'My first React element!'
);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it to the DOM!'
)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

ReactDOM.render(
    header,
    document.getElementById('root')
);
```

### Using JSX
JSX is a syntax extension to JavaScript that is used with React to describe elements in the UI.

JSX is not valid JavaScript or HTML - to create React elements with JSX, it needs to be 'transpiled' into React.createElement() calls

As JSX is an extension of JavaScript, it accepts any regular JS expressions in curly braces {}; this allows JSX to be used dynamically.

```html
<script src=
    "https://unpkg.com/babel-standalone@6/babel.min.js">
</script>

<script type="text/babel" src=
    "./app.js">
</script>

```

## React Components
A component is a piece of UI that can be reused. React components must be declared with an uppercase letter, to differentiate custom elements from native DOM elements. In JSX, lower case tags will be assumed to be HTML.

To create a React component:
1. Define the component as a JavaScript function or class.
2. Display the component in the UI with a JSX tag.

React functions and classes will return React elements.

```js
function Header() {
    return (
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    );
}
  
ReactDOM.render(
    <Header />,
    document.getElementById('root')
);
```

## React Props
Props are a list of properties to pass data from a parent component down to a child component.

Components are customised and made reusable with props.

> All React components must act like pure functions with respect to their props.

An important detail to remember about props is that they are "read only" (or immutable), which means that a component can only read the props given to it, never change them. The (parent) component higher in the tree owns and controls the property values.

```js
// Below will not work:
const Header = (props) => {
  return (
    <header>
      <h1>{ props.title = 'Fun Board' }</h1>
    </header>
  );
}

// React will throw the error: // Cannot assign to read only property 'title' of object.
```

Using props:
1. Define the props in a component's JSX tag.
2. Enable the use of props in a component.

```js
<Header 
  title="My Scoreboard" 
  totalPlayers={5}
  isFun={true}
/>
```

React manages what gets rendered to the DOM.

In order for this process to be fast and efficient, React needs a way to quickly know which items were changed, added, or removed. For this, React gives elements a special built-in prop named **key**.

A key is a unique identifier that gives React a way to quickly and reliably identify an element in a list.

Not all elements need a key prop - only when creating elements by iterating over an array on items that will be rearranged in the DOM.

## Class Components/State
**Class components** offer a more powerful way to build components because they're the only type of components that let you use state.

In React, **"state"** is the data you want to track in your app. State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.

The only required method in a class component is:
```js
$ render()
```

If a component is only rendering props in the UI, use a stateless functional component with the `props` passed in as an argument.

Types of state:
1. *Application State*: data that is available throughout the entire application.
2. *Component State*: state that is specific to a component and not shared outside of the component.

When you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. You need to bind your custom methods, so that this refers to the component instance.