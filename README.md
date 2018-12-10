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

## Components
Any time React components are being created and declared, components must start with uppercase, otherwise will assume it is a <HTML> renderable element in lowercase.

## Terminal
To initialise a new React project:

```
$ create-react-app [project-name]
$ cd [project-name]
```

It will create a director called `project-name`.

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
