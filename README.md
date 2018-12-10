# React
Notes and practice creating and testing components in React.

## Resources
* React: https://reactjs.org/
* Babel: https://babeljs.io/
* create-react-app: https://github.com/facebook/create-react-app

## Summary
React is a JavaScript library for building user interfaces.

* **Declarative**: Create interactive UIs by designing simple views for each state in an application, and React will efficiently update and render just the right components when data changes. Declarative views make  code more predictable, simpler to understand, and easier to debug.

* **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, it can easily pass rich data through your app and keep state out of the DOM.

* **Learn Once, Write Anywhere**: React doesn't make assumptions about the rest of the technology stack, so new features can be developed in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## Installation
### Using CDN
In `index.html`, insert links to React CDN library, like below:
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
To initialise a new React project:

```
$ create-react-app [project-name]
$ cd [project-name]
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
$ npm init react-app [project-name]
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
Props are a list of properties to pass data to a component.

Components are customised and made reusable with props.

Using Props:
1. Define the props in a component's JSX tag.
2. Enable the use of props in a component.

## State
Lorem ipsum

# create-react-app
## Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
