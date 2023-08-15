/**
 * Detects browser version
 */
function detectRenderingEngineName(userAgent: string): string {
  return 'Blink';
}

/**
 * Detects browser version
 */
function detectRenderingEngineVersion(userAgent: string): number {
  return 62;
}

/**
 * Detects browser version
 */
function detectRenderingEngineNameAndVersion(userAgent: string): {name: string; version: number} {
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
