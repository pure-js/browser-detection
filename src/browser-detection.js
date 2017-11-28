/**
 * Detects browser version
 * @param {string} userAgent
 * @return {Object} The new Circle object.
 */
function detectBrowser(userAgent) {
  let ua = userAgent;
  let tem;
  let M = ua.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: Number((tem[1] || '')),
    };
  }

  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem !== null) {
      return {
        name: tem[1].replace('OPR', 'Opera'),
        version: Number(tem[2]),
      };
    }
  }

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

  if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);

  return {
    name: M[0],
    version: Number(M[1]),
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
