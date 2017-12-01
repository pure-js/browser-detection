/**
 * Detects browser version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectRenderingEngineName() {

}

/**
 * Detects browser version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectRenderingEngineVersion() {

}
/**
 * Detects browser version
 * @param {Object} nav
 * @return {Object} The new Circle object.
 */
function detectRenderingEngineNameAndVersion() {
  return {
    name: 'Blink',
    version: 62,
  };
}

export {
  detectRenderingEngineName,
  detectRenderingEngineVersion,
  detectRenderingEngineNameAndVersion,
};
