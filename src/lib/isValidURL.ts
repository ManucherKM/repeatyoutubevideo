export function isValidHttpUrl(string: string) {
  try {
    new URL(string);
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (_) {
    return false;
  }

  return true;
}
