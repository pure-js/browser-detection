/**
 * Retrieve browser version
 */
export function retrieveVersion(
  browserName: string,
  userAgent: string,
): number {
  const name = `${browserName}/`;
  const start = userAgent.indexOf(name);
  let preNum = userAgent.substring(start + name.length);
  const index = preNum.indexOf(' ');
  if (index > 0) {
    preNum = preNum.substring(0, index);
  }

  let end;

  if (preNum.indexOf('.', 2) > 0) {
    end = preNum.indexOf('.', 2);
  } else {
    end = preNum.indexOf('.', 1);
  }

  const num = preNum.substring(0, end);
  return Number(num);
}
