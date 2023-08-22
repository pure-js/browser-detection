const browsers = {
  firefox: 27,
  chrome: 60,
  opera: 15,
  ie: 11,
};

export type BrowserType =
  | {
      firefox: number;
    }
  | {
      chrome: number;
    }
  | {
      opera: number;
    }
  | {
      ie: number;
    }
  | {
      ucbrowser: number;
    };

/**
 * Compare current browser version & version from passed array
 */
function isBrowserDeprecated(
  currentBrowser: BrowserType,
  supportedBrowsers = browsers,
): boolean {
  const browserName = Object.keys(currentBrowser)[0];

  if (Object.prototype.hasOwnProperty.call(supportedBrowsers, browserName)) {
    return (
      currentBrowser[browserName as keyof typeof currentBrowser] <
      supportedBrowsers[browserName as keyof typeof currentBrowser]
    );
  }

  return false;
}

export { isBrowserDeprecated };
