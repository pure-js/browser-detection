/**
 * Detects browser version
 */
function detectRenderingEngineName(): string {
  return 'Blink';
}

/**
 * Detects browser version
 */
function detectRenderingEngineVersion(): number {
  return 62;
}

/**
 * Detects browser version
 */
function detectRenderingEngineNameAndVersion(): {
  name: string;
  version: number;
} {
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
