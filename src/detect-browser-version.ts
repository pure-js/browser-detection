import { retrieveVersion } from './retrieve-version';
import { getBrowserUaName } from './browser-detection';

import type { BrowserName } from './browser-detection';

/**
 * Detects browser version
 */
export function detectBrowserVersion(
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
