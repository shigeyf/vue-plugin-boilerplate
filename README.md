# Vue.js v3.x Plugin boilerplate

This is a boilerplate project repository for Vue.js v3.x sample plugin package.

This project is created with NPM workspace feature. The sample plugin package is located under `packages\` folder.
There are two packages under this project:

- `packages/vue-sample-plugin`: a project for sample plugin
- `packages/vue-app`: a project for sample app

All tools for development are added to the `package.json` in the root folder.
The following tools for dev are added:

- [Husky](https://typicode.github.io/husky/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Commitlint](https://commitlint.js.org/)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [git-cz](https://github.com/streamich/git-cz)

## Initialize root project

Run the following commands to install package dependencies for development workspace.

```shell
npm install
```

## Sample plugin

### How to build a plugin

Run the following commands to build package of Vue3 sample plugin.

```shell
npm run build -w packages/vue-sample-plugin
```

or build all packages with the following command:

```shell
npm run build --workspaces
```

### How to clean a sample plugin build

Run the following commands to clean up.

```shell
npm run clean -w packages/vue-sample-plugin
```

or clean all package builds with the following command:

```shell
npm run clean --workspaces
```

## Sample app

### How to run a sample app with vite (for development)

Run the following commands to build Vue3 sample app.

```shell
npm run dev -w packages/vue-app
```

### How to build a sample app

Run the following commands to build Vue3 sample app.

```shell
npm run build -w packages/vue-app
```

### How to clean a sample app build

Run the following commands to clean up.

```shell
npm run clean -w packages/vue-app
```
