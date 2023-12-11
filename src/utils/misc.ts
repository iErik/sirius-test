// -> Types
// --------

type RGBCodes = {
  r: string | number,
  g: string | number,
  b: string | number
}

/**
 *
 * @param value
 * @param constructor
 * @returns
 */
export const isType = (
  value: any,
  constructorName: string
): boolean =>
  Object.prototype.toString
    .call(value) === `[object ${constructorName}]`

/**
 *
 */
export const hexToRgb = (
  hex: string,
  opacity: number = 1
): { css: string, codes: RGBCodes } | null => {
  const tokenCapture = '([a-f\d]{2})'.repeat(3)
  const tokens = new RegExp(`^#?${tokenCapture}$`, 'i')
    .exec(hex)

  if (!tokens) return null

  const codes = {
    r: parseInt(tokens[1], 16),
    g: parseInt(tokens[2], 16),
    b: parseInt(tokens[3], 16),
  }

  return {
    codes,
    css: `rgba(${[
      ...Object.values(codes),
      Math.max(Math.min(opacity, 1), 0)
    ].join(', ')})`
  }
}

export const toRgba = (
  color: string,
  opacity: number
): string | undefined =>
  hexToRgb(color, opacity)?.css

