# frontend

Bootstrapped this frontend app with React + Vite document: https://vitejs.dev/guide/

And followed this document to make GraphQL calls: https://www.apollographql.com/docs/react/get-started/

## Start front end server locally

1. In `Terminal`, navigate to `frontend/`.

2. Run the `yarn dev` command.

3. Navigate to `http://localhost:5173/` in your browser.

## Start front end server remotely

[Not setup yet.]

## Directories and Files

### Directories

#### .vite/

Per https://vitejs.dev/config/#configuring-vite, `...the config file is auto pre-processed before load.` See:

> ...Vite supports using ES modules syntax in the config file even if the project is not using native Node ESM, e.g. type: "module" in package.json. In this case, the config file is auto pre-processed before load.

#### node_modules/

#### public/

#### src/

### Files

#### .env.local

Excluded from Git.

#### .eslintrc.cjs

#### index.html

#### package.json

#### README.md

This readme file.

#### vite.config.js

#### yarn.lock

---

Below is the original README.md file.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
