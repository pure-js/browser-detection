const browsers = {
  firefox: 27,
  chrome: 60,
  opera: 15,
  ie: 11,
};

type BrowserType = {firefox: number} | {chrome: number} | {opera: number} | {ie: number};

/**
 * Compare current browser version & version from passed array
 * @param {Object} currentBrowser
 * @param {Object} supportedBrowsers - list of supported browsers
 * @return {Object} The new Circle object.
 */
function browserIsDeprecated(
  currentBrowser: BrowserType,
  supportedBrowsers = browsers,
) {
  const browserName = Object.keys(currentBrowser)[0];

  if (Object.prototype.hasOwnProperty.call(supportedBrowsers, browserName)) {
    return (currentBrowser[browserName as keyof typeof currentBrowser] < supportedBrowsers[browserName as keyof typeof currentBrowser]);
  }

  return false;
}

export {
  browserIsDeprecated,
};
