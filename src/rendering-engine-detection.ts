/**
 * Detects browser version
 * @param {string} userAgent
 * @return {number}
 */
function detectRenderingEngineName(userAgent: string) {
  return 'Blink';
}

/**
 * Detects browser version
 * @param {string} userAgent
 * @return {number}
 */
function detectRenderingEngineVersion(userAgent: string) {
  return 62;
}
/**
 * Detects browser version
 * @param {string} userAgent
 * @return {object}
 */
function detectRenderingEngineNameAndVersion(userAgent: string) {
  return {
    name: detectRenderingEngineName(userAgent),
    version: detectRenderingEngineVersion(userAgent),
  };
}

export {
  detectRenderingEngineName,
  detectRenderingEngineVersion,
  detectRenderingEngineNameAndVersion,
};
