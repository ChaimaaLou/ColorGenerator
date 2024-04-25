import { useState } from "react";
import { getRandomColor } from "../assets/getRandomColor";

const useCrDelColor = (initialColors?: Array<string>) => {
  const [colors, setColors] = useState<Array<string>>(() => {
    if (initialColors) return initialColors;
    return [getRandomColor(), getRandomColor(), getRandomColor()];
  });

  const removeColor = (indexToRemove: number) => {
    const updatedColors = colors.filter((_, index) => index !== indexToRemove);
    setColors(updatedColors);
  };

  const addColor = () => {
    setColors([...colors, getRandomColor()]);
  };

  return { colors, removeColor, addColor };
};

export default useCrDelColor;
