# dvhb web app

> Based on [@dvhb/template-react-ssr](https://github.com/dvhb/template-react-ssr).

> ![logo](./app-logo.svg)

## Stack

- next `latest`
- react `16.12.0`
- typescript `3.7.3`
- storybook `5.3.12`

## E2E tests

To run e2e tests use the following commands (tests will be launched in the local environment):

- with ui: `npm run test:cypress:open`
- headless: `npm run test:cypress:ci`

If you want to launch tests in other environment use:

- with ui: `npm run test:cypress:open {env}`
- headless: `npm run test:cypress:ci {env}`

where {env} is one of `local/dev/stage`, e.g. `npm run test:cypress:open stage`.

Note: run `npm run dev` before launch tests in local environment.
