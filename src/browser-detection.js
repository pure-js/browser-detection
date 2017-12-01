/**
 * Detects IE browser
 * @param {string} str
 * @return {boolean} The new Circle object.
 */
function isIE(str) {
  return (/trident/i.test(str));
}

/**
 * Detects Opera browser
 * @param {string} userAgent
 * @return {boolean} The new Circle object.
 */
function isOpera(userAgent) {
  return (/\b(OPR)\/(\d+)/.test(userAgent));
}

/**
 * Detects Edge browser
 * @param {string} userAgent
 * @return {boolean} The new Circle object.
 */
function isEdge(userAgent) {
  return (/\b(Edge)\/(\d+)/.test(userAgent));
}

/**
 * Detects browser name
 * @param {object} nav - window.navigator
 * @return {string} browser name
 */
function detectBrowserName(nav) {
  const {userAgent} = nav;

  let found = userAgent.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (isIE(found[1])) return 'IE';

  if (found[1] === 'Chrome') {
    if (isOpera(userAgent)) return 'Opera';

    if (isEdge(userAgent)) return 'Edge';
  }

  found = found[2] ? [found[1],
    found[2]] : [nav.appName, nav.appVersion, '-?'];

  let temp;
  if ((temp = userAgent.match(/version\/(\d+)/i))
    !== null) found.splice(1, 1, temp[1]);

  return found[0];
}

/**
 * Detects browser version
 * @param {string} nav
 * @param {string} name
 * @return {Object} The new Circle object.
 */
function detectBrowserVersion(nav, name) {
  const {userAgent} = nav;
  let temp;
  let found = userAgent.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (isIE(found[1])) {
    let temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return Number(temp[1]) || null;
  }

  if (found[1] === 'Chrome') {
    if (isOpera(userAgent)) {
      let temp = userAgent.match(/\b(OPR)\/(\d+)/);
      return Number(temp[2]);
    }

    if (isEdge(userAgent)) {
      let temp = userAgent.match(/\b(Edge)\/(\d+)/);
      return Number(temp[2]);
    }
  }

  found = found[2] ? [found[1],
    found[2]] : [nav.appName, nav.appVersion, '-?'];

  if ((temp = userAgent.match(/version\/(\d+)/i))
    !== null) found.splice(1, 1, temp[1]);

  return Number(found[1]);
}

/**
 * Detects browser name & version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectBrowserNameAndVersion(nav) {
  return {
    name: detectBrowserName(nav),
    version: detectBrowserVersion(nav, detectBrowserName(nav)),
  };
}

export {
  detectBrowserName,
  detectBrowserVersion,
  detectBrowserNameAndVersion,
};
