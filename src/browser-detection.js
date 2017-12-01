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

function detectBrowserName() {

}

function detectBrowserVersion() {

}

/**
 * Detects browser version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectBrowserNameAndVersion(nav) {
  const {userAgent} = nav;
  let temp;
  let found = userAgent.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (isIE(found[1])) {
    let temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return {
      name: 'IE',
      version: Number(temp[1]) || null,
    };
  }

  if (found[1] === 'Chrome') {
    if (isOpera(userAgent)) {
      let temp = userAgent.match(/\b(OPR)\/(\d+)/);
      return {
        name: 'Opera',
        version: Number(temp[2]),
      };
    }

    if (isEdge(userAgent)) {
      let temp = userAgent.match(/\b(Edge)\/(\d+)/);
      return {
        name: 'Edge',
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

export {
  detectBrowserName,
  detectBrowserVersion,
  detectBrowserNameAndVersion,
};
