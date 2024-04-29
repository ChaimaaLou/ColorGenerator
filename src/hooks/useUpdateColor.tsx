import { useState } from "react";
import { getRandomColor } from "../assets/getRandomColor";

const useUpdateColor = (color: string) => {
  const [color2, setColor] = useState(color);

  const newRandomColor = () => {
    const newColorValue = getRandomColor();
    setColor(newColorValue);
  };

  const newColor = (color: string) => {
    setColor(color);
  };

  return { color2, newRandomColor, newColor };
};

export default useUpdateColor;
