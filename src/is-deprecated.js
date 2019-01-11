const defaults = {
  browsers: {
    Firefox: 27,
    Chrome: 60,
    Opera: 15,
    IE: 11,
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
    supportedBrowsers = defaults.browsers
) {
  const browserName = Object.keys(currentBrowser)[0];

  if (supportedBrowsers.hasOwnProperty(browserName)) {
    return (currentBrowser[browserName] < supportedBrowsers[browserName]);
  } else {
    return false;
  }
}

export {
  browserIsDeprecated,
};
