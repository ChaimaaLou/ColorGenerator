export function getRandomColor() {
  // This generates a random number between 0 and 255 for each color component
  const red = Math.floor(Math.random() * 256); // 0-255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert each color component into a hexadecimal string
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  return "#" + redHex + greenHex + blueHex;
}
