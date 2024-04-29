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

  const addRandomColor = () => {
    setColors([...colors, getRandomColor()]);
  };

  const addColor = ({ color }: { color: string }) => {
    setColors([...colors, color]);
  };

  console.log(colors);

  return { colors, removeColor, addRandomColor, addColor };
};

export default useCrDelColor;
