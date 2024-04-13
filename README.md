# Hyakutoku

## What's Hyakutoku

Hyakutoku contains utility tools available on web browsers

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

Run all tests with headless browser

```
npm run build
npx playwright test
```


Run all tests with headed browser

```
npm run build
npx playwright test --headed
```
