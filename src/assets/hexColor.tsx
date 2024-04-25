export function hexColor(
  colorName: string,
  colorHex: string | React.MutableRefObject<string>
): string {
  if (colorName === "Red" || colorName === "red") {
    return "#" + colorHex + "0000";
  } else if (colorName === "Blue" || colorName === "blue") {
    return "#" + "0000" + colorHex;
  } else if (colorName === "Green" || colorName === "green") {
    return "#" + "00" + colorHex + "00";
  } else {
    return "please enter a valid color name";
  }
}
