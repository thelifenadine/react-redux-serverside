[![Build Status](https://travis-ci.com/thelifenadine/react-redux-serverside.svg?branch=master)](https://travis-ci.com/thelifenadine/react-redux-serverside) [![Coverage Status](https://coveralls.io/repos/github/thelifenadine/react-redux-serverside/badge.svg?branch=master)](https://coveralls.io/github/thelifenadine/react-redux-serverside?branch=master)

# react-redux-serverside

This is a template for building universal/isomorphic web apps with `react`, `redux`, and `react-router`. The styles are just enough to provide examples of `jss`, hopefully one day I will make it look nicer! The tests are also minimal, the goal is to have some examples to get you started.

### Instructions
`git clone git@github.com:thelifenadine/react-redux-serverside.git`

`npm install && npm run start` then navigate to http://localhost:3000 in a browser.

### Overview of libraries:
| library | function |
| ----------- | ----------- |
| `babel` | transpiling |
| `webpack` | bundling |
| `loadable-components` | code splitting |
| `redux-connect` with `react-router-config` | for async data handling |
| `jss` | styles |
| `express` | server |
| `mocha`, `chai`, `enzyme`, `nyc` | tests |
