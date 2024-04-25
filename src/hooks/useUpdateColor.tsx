import { useState } from "react";
import { getRandomColor } from "../assets/getRandomColor";

const useUpdateColor = (color: string) => {
  const [color2, setColor] = useState(color);

  const newColor = () => {
    const newColorValue = getRandomColor();
    setColor(newColorValue);
  };

  return { color2, newColor };
};

export default useUpdateColor;
