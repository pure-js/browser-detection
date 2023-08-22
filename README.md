# Detect browser

![Build Status](https://github.com/pure-js/browser-detection/actions/workflows/build.yml/badge.svg)
![Test Coverage](https://github.com/pure-js/browser-detection/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/pure-js/browser-detection/branch/master/graph/badge.svg)](https://codecov.io/gh/pure-js/browser-detection)

Browser detection using the user agent.
Tested on most popular browser in the World on October 2017 (and updated on July 2023), statistic gets from StatCounter.

> It's worth re-iterating: it's very rarely a good idea to use user agent sniffing. You can almost always find a better, more broadly compatible way to solve your problem!
>
> > More details [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

## Installation

```
npm i browser-version-detection --save
```

Script returns object with browser name and version, for example:

```javascript
const output = {
  name: "Chrome",
  version: 62,
};
```

## API

### Get browser name and version

```javascript
import { detectBrowser } from "browser-version-detection";

detectBrowser(window.navigator);
```

output

```javascript
const output = {
  name: "Chrome",
  version: 64,
};
```

### Get browser name

```javascript
import { detectBrowserName } from "browser-version-detection";

detectBrowserName(window.navigator.userAgent);
```

output

```javascript
const output = "Chrome";
```

### Get browser version

```javascript
import {
  detectBrowserName,
  detectBrowserVersion,
} from "browser-version-detection";

const name = detectBrowserName(window.navigator.userAgent);
detectBrowserVersion(window.navigator, name);
```

output

```javascript
const output = 64;
```

Minified script located in `dist/` folder

## Contribution

    pnpm i
    pnpm start

## Test

    pnpm test
