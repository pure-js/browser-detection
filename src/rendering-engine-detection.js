/**
 * Detects browser version
 * @param {string} userAgent
 * @return {number}
 */
function detectRenderingEngineName(userAgent) {
  return 'Blink';
}

/**
 * Detects browser version
 * @param {string} userAgent
 * @return {number}
 */
function detectRenderingEngineVersion(userAgent) {
  return 62;
}
/**
 * Detects browser version
 * @param {string} userAgent
 * @return {object}
 */
function detectRenderingEngineNameAndVersion(userAgent) {
  return {
    name: detectRenderingEngineName(),
    version: detectRenderingEngineVersion(),
  };
}

export {
  detectRenderingEngineName,
  detectRenderingEngineVersion,
  detectRenderingEngineNameAndVersion,
};
