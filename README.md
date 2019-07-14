## Introduction

Forked from [vue-element-admin](https://panjiachen.github.io/vue-element-admin), it is a production-ready front-end solution for admin interfaces. It based on [vue](https://github.com/vuejs/vue) and use the UI Toolkit [element-ui](https://github.com/ElemeFE/element).

## Preparation

You need to install [node](https://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on [ES2015+](https://es6.ruanyifeng.com/), [vue](https://cn.vuejs.org/index.html), [vuex](https://vuex.vuejs.org/zh-cn/), [vue-router](https://router.vuejs.org/zh-cn/), [vue-cli](https://github.com/vuejs/vue-cli) , [axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element), all request data is simulated using [Mock.js](https://github.com/nuysoft/Mock).
Understanding and learning this knowledge in advance will greatly help the use of this project.

 <p align="center">
  <img width="900" src="https://wpimg.wallstcn.com/a5894c1b-f6af-456e-82df-1151da0839bf.png">
</p>

## Getting started

```bash
# clone the project
git clone https://github.com/jdomzhang/vue-element-admin.git

# enter the project directory
cd vue-element-admin

# install dependency
yarn

# develop
yarn dev
```

This will automatically open http://localhost:9527

## Build

```bash
# build for test environment
yarn build:stage

# build for production environment
yarn build:prod
```

## Advanced

```bash
# preview the release environment effect
yarn preview

# preview the release environment effect + static resource analysis
yarn preview -- --report

# code format check
yarn lint

# code format check and auto fix
yarn lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) for more information

## License

[MIT](https://github.com/jdomzhang/vue-element-admin/blob/master/LICENSE)

Copyright (c) 2017-present PanJiaChen
