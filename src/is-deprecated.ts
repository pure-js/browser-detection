const defaults = {
  browsers: {
    firefox: 27,
    chrome: 60,
    opera: 15,
    ie: 11,
  },
};

/**
 * Compare current browser version & version from passed array
 * @param {Object} currentBrowser
 * @param {Object} supportedBrowsers - list of supported browsers
 * @return {Object} The new Circle object.
 */
function browserIsDeprecated(
  currentBrowser,
  supportedBrowsers = defaults.browsers,
) {
  const browserName = Object.keys(currentBrowser)[0];

  if (Object.prototype.hasOwnProperty.call(supportedBrowsers, browserName)) {
    return (currentBrowser[browserName] < supportedBrowsers[browserName]);
  }

  return false;
}

export {
  browserIsDeprecated,
};
