import { useEffect, useRef } from "react";
import { hexColor } from "../assets/hexColor";

const useUpdateColor = (colorName: string, colorHex: string) => {
  const hexColorRef = useRef(hexColor(colorName, colorHex));

  useEffect(() => {
    hexColorRef.current = hexColor(colorName, colorHex);
  }, [colorHex, colorName]);

  return { hexColor: hexColorRef.current };
};

export default useUpdateColor;
