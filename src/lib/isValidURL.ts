export function isValidHttpUrl(string: string) {
  try {
    new URL(string);
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (_) { /* eslint-disable @typescript-eslint/no-unused-vars */
    return false;
  }

  return true;
}
