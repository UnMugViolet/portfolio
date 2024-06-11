# <img src="https://lh6.googleusercontent.com/proxy/O0jtLgr-_kq0MLNcfc-mNens2PSj9oDn4296O8SgMRO2hv4SrTtKjTZN6iecZPdxD67l6YUk26QL0raQ818tXOioabNh1mYpQxQfHw" width="30px"> PorfolioXp

[![Quality Gate Status](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=Portfolio&metric=alert_status&token=sqb_e742223fed4a875c311d5a23a0dc4d6bc80fb584)](https://sonarqube.rocketegg.systems/dashboard?id=Portfolio)
[![Lines of Code](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=Portfolio&metric=ncloc&token=sqb_e742223fed4a875c311d5a23a0dc4d6bc80fb584)](https://sonarqube.rocketegg.systems/dashboard?id=Portfolio)

## Project Setup

test

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Nightwatch](https://nightwatchjs.org/)

```sh
# When using CI, the project must be built first.
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chrome
npm run test:e2e -- --env chrome
# Runs the tests of a specific file
npm run test:e2e -- tests/e2e/example.js
# Runs the tests in debug mode
npm run test:e2e -- --debug
```
    
### Run Headed Component Tests with [Nightwatch Component Testing](https://nightwatchjs.org/guide/component-testing/introduction.html)
  
```sh
npm run test:unit
npm run test:unit -- --headless # for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
