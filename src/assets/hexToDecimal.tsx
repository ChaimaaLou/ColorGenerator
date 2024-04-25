export function hexToDecimal(hexString: string) {
  const cleanString = hexString.startsWith("0x")
    ? hexString.slice(2)
    : hexString;
  return parseInt(cleanString, 16);
}
