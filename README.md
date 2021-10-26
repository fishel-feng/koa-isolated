# koa-isolated
A koa middleware for Enabling cross-origin-isolation.

> Cross-origin isolation enables a web page to use powerful features such as
SharedArrayBuffer. This article explains how to enable cross-origin
isolation on your website.

The isolation need to set the header for [Cross-Origin-Opener-Policy(CROP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) and [Cross-Origin-Embedder-Policy(COEP)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

If you want to use `SharedArrayBuffer`, `performance.measureUserAgentSpecificMemory()` or high resolution timer with better precision, you should enable cross-origin isolation.

## Installation

use npm

```shell
npm install koa-isolated
```

or use yarn

```shell
yarn add koa-isolated
```

## Quick start

```javascript
const Koa = require('koa');
const isolated = require('koa-isolated');

const app = new Koa();
app.use(isolated());
```

## License
[MIT](https://github.com/fx109138/koa-isolated/blob/main/LICENSE)
