/**
 * Detects Chrome browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isChrome(userAgent) {
  return userAgent.includes('Chrome') &&
    !userAgent.includes('Chromium') &&
    !userAgent.includes('OPR') &&
    !userAgent.includes('Edge') &&
    !userAgent.includes('SamsungBrowser');
}

/**
 * Detects Safari browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isSafari(userAgent) {
  return userAgent.includes('Safari') &&
    !userAgent.includes('Chrome') &&
    !userAgent.includes('Chromium') &&
    !userAgent.includes('Android');
}

/**
 * Detects UC browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isUCBrowser(userAgent) {
  return userAgent.includes('UCBrowser');
}

/**
 * Detects Firefox browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isFirefox(userAgent) {
  return userAgent.includes('Firefox') && !userAgent.includes('Seamonkey');
}

/**
 * Detects IE browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isIE(userAgent) {
  return (/trident/i.test(userAgent));
}

/**
 * Detects Opera browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isOpera(userAgent) {
  return userAgent.includes('OPR');
}

/**
 * Detects Samsung browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isSamsungInternet(userAgent) {
  return userAgent.includes('SamsungBrowser');
}

/**
 * Detects Android browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isAndroidBrowser(userAgent) {
  return userAgent.includes('Android') &&
    !userAgent.includes('Chrome') &&
    userAgent.includes('AppleWebKit');
}

/**
 * Detects Edge browser
 * @param {string} userAgent
 * @return {boolean}
 */
function isEdge(userAgent) {
  return userAgent.includes('Edge') && userAgent.includes('Chrome');
}

/**
 * Detects browser name
 * @param {string} userAgent - window.navigator
 * @return {string} browser name
 */
function detectBrowserName(userAgent) {
  if (isChrome(userAgent)) return 'Chrome';
  if (isSafari(userAgent)) return 'Safari';
  if (isUCBrowser(userAgent)) return 'UC Browser';
  if (isFirefox(userAgent)) return 'Firefox';
  if (isIE(userAgent)) return 'IE';
  if (isOpera(userAgent)) return 'Opera';
  if (isSamsungInternet(userAgent)) return 'Samsung Internet';
  if (isAndroidBrowser(userAgent)) return 'Android Browser';
  if (isEdge(userAgent)) return 'Edge';
}

/**
 * Retrieve browser version
 * @param {string} name
 * @param {string} str
 * @return {number} browser version
 */
function retrieveVersion(name, str) {
  name = name + '/';
  const start = str.indexOf(name);
  let preNum = str.substring(start + name.length);
  const index = preNum.indexOf(' ');
  if (index > 0) preNum = preNum.substring(0, index);
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
 * @param {string} name
 * @return {string} browser name
 */
function getBeautifulName(name) {
  let browserName;
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
  }
  return browserName;
}

/**
 * Detects browser version
 * @param {object} nav
 * @param {string} name
 * @return {number} browser version
 */
function detectBrowserVersion(nav, name) {
  const {userAgent} = nav;

  switch (name) {
    case 'IE': {
      const temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
      return Number(temp[1]) || null;
    }

    case 'Edge': {
      const temp = userAgent.match(/\b(Edge)\/(\d+)/);
      return Number(temp[2]);
    }
  }

  const browserName = getBeautifulName(name);

  if (browserName) return retrieveVersion(browserName, userAgent);

  let found = userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  found = found[2] ? [found[1],
    found[2]] : [nav.appName, nav.appVersion, '-?'];

  let temp;
  if ((temp = userAgent.match(/version\/(\d+)/i))
    !== null) found.splice(1, 1, temp[1]);

  return Number(found[1]);
}

/**
 * Detects browser name & version
 * @param {object} nav
 * @return {object} browser name & version
 */
function detectBrowserNameAndVersion(nav) {
  const name = detectBrowserName(nav.userAgent);

  return {
    name: name,
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
