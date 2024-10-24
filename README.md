# <img src="https://lh6.googleusercontent.com/proxy/O0jtLgr-_kq0MLNcfc-mNens2PSj9oDn4296O8SgMRO2hv4SrTtKjTZN6iecZPdxD67l6YUk26QL0raQ818tXOioabNh1mYpQxQfHw" width="30px"> PorfolioXp

[![Quality Gate Status](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=PortfolioXp&metric=alert_status&token=sqb_c0b5f74b6c031ae2f329c6c588e3c8bc48556788)](https://sonarqube.rocketegg.systems/dashboard?id=PortfolioXp)

[![Lines of Code](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=PortfolioXp&metric=ncloc&token=sqb_c0b5f74b6c031ae2f329c6c588e3c8bc48556788)](https://sonarqube.rocketegg.systems/dashboard?id=PortfolioXp)
## Project Setup

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
