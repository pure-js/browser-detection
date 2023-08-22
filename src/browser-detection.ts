/**
 * Detects Chrome browser
 */
function isChrome(userAgent: string): boolean {
  return userAgent.includes('Chrome')
    && !userAgent.includes('Chromium')
    && !userAgent.includes('OPR')
    && !userAgent.includes('Edge')
    && !userAgent.includes('SamsungBrowser');
}

/**
 * Detects Safari browser
 */
function isSafari(userAgent: string): boolean {
  return userAgent.includes('Safari')
    && !userAgent.includes('Chrome')
    && !userAgent.includes('Chromium')
    && !userAgent.includes('Android');
}

/**
 * Detects UC browser
 */
function isUcBrowser(userAgent: string): boolean {
  return userAgent.includes('UCBrowser');
}

/**
 * Detects Firefox browser
 */
function isFirefox(userAgent: string): boolean {
  return userAgent.includes('Firefox') && !userAgent.includes('Seamonkey');
}

/**
 * Detects IE browser
 */
function isIe(userAgent: string): boolean {
  return (/trident/i.test(userAgent));
}

/**
 * Detects Opera browser
 */
function isOpera(userAgent: string): boolean {
  return userAgent.includes('OPR');
}

/**
 * Detects Samsung browser
 */
function isSamsungInternet(userAgent: string): boolean {
  return userAgent.includes('SamsungBrowser');
}

/**
 * Detects Android browser
 */
function isAndroidBrowser(userAgent: string): boolean {
  return userAgent.includes('Android')
    && !userAgent.includes('Chrome')
    && userAgent.includes('AppleWebKit');
}

export type BrowserName = 'Chrome' | 'Safari' | 'UC Browser' | 'Firefox' | 'IE' | 'Opera' | 'Samsung Internet' | 'Android Browser' | 'Edge';

/**
 * Detects Edge browser
 */
function isEdge(userAgent: string): boolean {
  return userAgent.includes('Edge') && userAgent.includes('Chrome');
}

/**
 * Detects browser name
 * @param {string} userAgent - window.navigator
 * @return {string} browser name
 */
function detectBrowserName(userAgent: string): BrowserName | undefined {
  if (isChrome(userAgent)) {
    return 'Chrome';
  }

  if (isSafari(userAgent)) {
    return 'Safari';
  }

  if (isUcBrowser(userAgent)) {
    return 'UC Browser';
  }

  if (isFirefox(userAgent)) {
    return 'Firefox';
  }

  if (isIe(userAgent)) {
    return 'IE';
  }

  if (isOpera(userAgent)) {
    return 'Opera';
  }

  if (isSamsungInternet(userAgent)) {
    return 'Samsung Internet';
  }

  if (isAndroidBrowser(userAgent)) {
    return 'Android Browser';
  }

  if (isEdge(userAgent)) {
    return 'Edge';
  }

  return undefined;
}

/**
 * Retrieve browser version
 */
function retrieveVersion(name: string, str: string): number {
  name += '/';
  const start = str.indexOf(name);
  let preNum = str.substring(start + name.length);
  const index = preNum.indexOf(' ');
  if (index > 0) {
    preNum = preNum.substring(0, index);
  }

  let end;

  if (preNum.indexOf('.', 2) > 0) {
    end = preNum.indexOf('.', 2);
  } else {
    end = preNum.indexOf('.', 1);
  }

  const num = preNum.substring(0, end);
  return Number(num);
}

/**
 * Returns Association
 */
function getBeautifulName(name: BrowserName | undefined): string | undefined {
  let browserName;

  if (name) {
    switch (name) {
      case 'Opera':
        browserName = 'OPR';
        break;
      case 'UC Browser':
        browserName = 'UCBrowser';
        break;
      case 'Samsung Internet':
        browserName = 'SamsungBrowser';
        break;
      default:
        return undefined;
    }
  }

  return browserName;
}

/**
 * Detects browser version
 */
function detectBrowserVersion(nav: {
  userAgent: string; appName?: string; appVersion?: string;
}, name: BrowserName | undefined): number | undefined {
  const {userAgent} = nav;

  if (name) {
  // eslint-disable-next-line default-case, @typescript-eslint/switch-exhaustiveness-check
    switch (name) {
      case 'IE': {
        const temp = /\brv[ :]+(\d+)/g.exec(userAgent) ?? [];
        return Number(temp[1]) || undefined;
      }

      case 'Edge': {
        const temp = /\b(Edge)\/(\d+)/.exec(userAgent);
        return temp ? Number(temp[2]) : undefined;
      }
    }
  }

  const browserName = getBeautifulName(name);

  if (browserName) {
    return retrieveVersion(browserName, userAgent);
  }

  let found = (/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(userAgent)) ?? [];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  found = found[2] ? [found[1],
    found[2]] : [nav.appName, nav.appVersion, '-?'];

  let temp;
  if ((temp = /version\/(\d+)/i.exec(userAgent))
    !== null) {
    found.splice(1, 1, temp[1]);
  }

  return found[1] ? Number(found[1]) : undefined;
}

/**
 * Detects browser name & version
 */
function detectBrowserNameAndVersion(nav: {userAgent: string}): {name: BrowserName | undefined; version: number | undefined} {
  const name = detectBrowserName(nav.userAgent);

  return {
    name,
    version: detectBrowserVersion(nav, name),
  };
}

const detectBrowser = detectBrowserNameAndVersion;

export {
  detectBrowserName,
  detectBrowserVersion,
  detectBrowserNameAndVersion,
  detectBrowser,
};
