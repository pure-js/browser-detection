import { retrieveVersion } from './retrieve-version';

/**
 * Detects Chrome browser
 */
function isChrome(userAgent: string): boolean {
  return (
    userAgent.includes('Chrome') &&
    !userAgent.includes('Chromium') &&
    !userAgent.includes('SamsungBrowser') &&
    !userAgent.includes('OPR') &&
    !userAgent.includes('MQQBrowser') &&
    !userAgent.includes('Edge')
  );
}

/**
 * Detects Safari browser
 */
function isSafari(userAgent: string): boolean {
  return (
    userAgent.includes('Safari') &&
    !userAgent.includes('Chrome') &&
    !userAgent.includes('Chromium') &&
    !userAgent.includes('Android')
  );
}

/**
 * Detects Samsung browser
 */
function isSamsungInternet(userAgent: string): boolean {
  return userAgent.includes('SamsungBrowser');
}

/**
 * Detects Opera browser
 */
function isOpera(userAgent: string): boolean {
  return userAgent.includes('OPR');
}

/**
 * Detects UC browser
 */
function isUcBrowser(userAgent: string): boolean {
  return userAgent.includes('UCBrowser');
}

/**
 * Detects Android browser
 */
function isAndroidBrowser(userAgent: string): boolean {
  return (
    userAgent.includes('Android') &&
    !userAgent.includes('Chrome') &&
    userAgent.includes('AppleWebKit')
  );
}

/**
 * Detects Firefox browser
 */
function isFirefox(userAgent: string): boolean {
  return userAgent.includes('Firefox') && !userAgent.includes('Seamonkey');
}

/**
 * Detects QQ browser
 */
function isQqBrowser(userAgent: string): boolean {
  return userAgent.includes('MQQBrowser');
}

/**
 * Detects IE browser
 */
function isIe(userAgent: string): boolean {
  return /trident/i.test(userAgent);
}

export type BrowserName =
  | 'Chrome'
  | 'Safari'
  | 'Samsung Internet'
  | 'Opera'
  | 'UC Browser'
  | 'Android Browser'
  | 'Firefox'
  | 'QQ Browser'
  | 'Edge'
  | 'IE';

/**
 * Detects Edge browser
 */
function isEdge(userAgent: string): boolean {
  return userAgent.includes('Edge') && userAgent.includes('Chrome');
}

/**
 * Detects browser name
 */
function detectBrowserName(userAgent: string): BrowserName | undefined {
  if (isChrome(userAgent)) {
    return 'Chrome';
  }

  if (isSafari(userAgent)) {
    return 'Safari';
  }

  if (isSamsungInternet(userAgent)) {
    return 'Samsung Internet';
  }

  if (isOpera(userAgent)) {
    return 'Opera';
  }

  if (isUcBrowser(userAgent)) {
    return 'UC Browser';
  }

  if (isAndroidBrowser(userAgent)) {
    return 'Android Browser';
  }

  if (isFirefox(userAgent)) {
    return 'Firefox';
  }

  if (isQqBrowser(userAgent)) {
    return 'QQ Browser';
  }

  if (isEdge(userAgent)) {
    return 'Edge';
  }

  if (isIe(userAgent)) {
    return 'IE';
  }

  return undefined;
}

export type UaBrowserName =
  | 'SamsungBrowser'
  | 'OPR'
  | 'UCBrowser'
  | 'MQQBrowser';

/**
 * Returns Association
 */
function getBrowserUaName(
  name: BrowserName | undefined,
): UaBrowserName | undefined {
  if (name) {
    switch (name) {
      case 'Opera':
        return 'OPR';
      case 'UC Browser':
        return 'UCBrowser';
      case 'Samsung Internet':
        return 'SamsungBrowser';
      case 'QQ Browser':
        return 'MQQBrowser';
      default:
        return undefined;
    }
  }
}

/**
 * Detects browser version
 */
function detectBrowserVersion(
  nav: {
    userAgent: string;
    appName?: string;
    appVersion?: string;
  },
  name: BrowserName | undefined,
): number | undefined {
  const { userAgent } = nav;

  if (name) {
    // eslint-disable-next-line default-case, @typescript-eslint/switch-exhaustiveness-check
    switch (name) {
      case 'Edge': {
        const temp = /\b(Edge)\/(\d+)/.exec(userAgent);
        return temp ? Number(temp[2]) : undefined;
      }

      case 'IE': {
        const temp = /\brv[ :]+(\d+)/g.exec(userAgent) ?? [];
        return Number(temp[1]) || undefined;
      }
    }
  }

  const browserName = getBrowserUaName(name);

  if (browserName) {
    return retrieveVersion(browserName, userAgent);
  }

  let found =
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(
      userAgent,
    ) ?? [];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  found = found[2] ? [found[1], found[2]] : [nav.appName, nav.appVersion, '-?'];

  let temp;
  if ((temp = /version\/(\d+)/i.exec(userAgent)) !== null) {
    found.splice(1, 1, temp[1]);
  }

  return found[1] ? Number(found[1]) : undefined;
}

/**
 * Detects browser name & version
 */
function detectBrowserNameAndVersion(nav: { userAgent: string }): {
  name: BrowserName | undefined;
  version: number | undefined;
} {
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
