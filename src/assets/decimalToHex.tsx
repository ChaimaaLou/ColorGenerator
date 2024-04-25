export function decimalToHex(number: number) {
  const hexString = number.toString(16).padStart(2, "0");
  return hexString;
}
