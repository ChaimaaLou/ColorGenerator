import { useState } from "react";
import { getRandomColor } from "../assets/getRandomColor";

const useUpdateColor = (initialColor: string) => {
  const [color2, setColor] = useState(initialColor);

  const newRandomColor = (): string => {
    const newColorValue = getRandomColor();
    setColor(newColorValue);
    return newColorValue;
  };

  const newColor = (color: string) => {
    setColor(color);
  };

  return { color2, newRandomColor, newColor };
};

export default useUpdateColor;
