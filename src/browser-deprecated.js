/**
 * Detects browser version
 * @param {string} userAgent
 * @return {Object} The new Circle object.
 */
function detectBrowser(userAgent) {
  let ua = userAgent;
  let tem;
  let M = ua.match(
    /(opera|chrome|safari|firefox|msie|edge|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: Number((tem[1] || '')),
    };
  }

  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) {
      return {
        name: 'Opera',
        version: Number(tem[1]),
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
 * @param {Array} browsers
 * @return {Object} The new Circle object.
 */
function browserIsDeprecated(browsers = defaults.browsers) {
  let currentBrowser = detectBrowser(navigator.userAgent);
  let name = currentBrowser.name;

  if (browsers.hasOwnProperty(name)) {
    let version = browsers[name];
    return (currentBrowser.version < version);
  } else {
    console.log('browser not found');
    return false;
  }
}

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
  module.exports = detectBrowser;
}
