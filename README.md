# Hyattoku

## What's Hyattoku

Hyattoku contains utility tools available on web browsers

## Requirement

node

## Install

```
npm install
```

## Launch

```
npm run dev
```

## Deploy

When pull request is merged into main branch, github actions is triggerd and changes are deployed to Github Pages.

## E2E test(local)

Before E2E test, build is required

```
npm run build
```


Run all tests with headless browser

```
npx playwright test
```

Run all tests with headed browser

```
npx playwright test --headed
```
