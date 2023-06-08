# Vue.js v3.x Plugin boilerplate

This is a boilerplate project repository for Vue.js v3.x sample plugin package.

This project is created with NPM workspace feature. The sample plugin package is located under `packages\` folder.
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

## A sample Vue3 plugin project

### How to build

Run the following commands to build package of Vue3 sample plugin.

```shell
cd packages/vue-sample-plugin
npm run build
```

or

```shell
npm run build --workspaces
```

### How to clean a package

Run the following commands to clean up.

```shell
cd packages/vue-sample-plugin
npm run clean
```

or

```shell
npm run clean --workspaces
```
