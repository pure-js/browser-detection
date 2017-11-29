/**
 * Detects browser version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectBrowser(nav) {
  const {userAgent} = nav;
  if (typeof userAgent === 'undefined') {
    throw new TypeError('UserAgent is not presented');
  }
  let temp;
  let found = userAgent.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (/trident/i.test(found[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return {
      name: 'IE',
      version: Number((temp[1] || '')),
    };
  }

  if (found[1] === 'Chrome') {
    temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
    if (temp !== null) {
      return {
        name: temp[1].replace('OPR', 'Opera'),
        version: Number(temp[2]),
      };
    }
  }

  found = found[2] ? [found[1],
    found[2]] : [nav.appName, nav.appVersion, '-?'];

  if ((temp = userAgent.match(/version\/(\d+)/i))
    !== null) found.splice(1, 1, temp[1]);

  return {
    name: found[0],
    version: Number(found[1]),
  };
}

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
function browserIsDeprecated(currentBrowser,
                             supportedBrowsers = defaults.browsers) {
  const browserName = Object.keys(currentBrowser)[0];

  if (supportedBrowsers.hasOwnProperty(browserName)) {
    return (currentBrowser[browserName] < supportedBrowsers[browserName]);
  } else {
    return false;
  }
}

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
  module.exports = {detectBrowser, browserIsDeprecated};
}
