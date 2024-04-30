import useColorSlider from "../hooks/useColorSlider";
import LabelColor from "./LabelColor";
import ToggleBar from "./ToggleBar";
import { useEffect, useState } from "react";
import "../assets/style.css";

export default function ColorSetter({
  colorName,
  colorHex,
  onChange,
}: {
  colorName: string;
  colorHex: string;
  onChange: (newValue: string) => void;
}) {
  const [sliderValue, setSliderValue] = useState(colorHex);
  const { hexColor } = useColorSlider(colorName, sliderValue);

  useEffect(() => {
    onChange(sliderValue);
  }, [sliderValue, onChange]);

  return (
    <div className="sliderContainer">
      <LabelColor color={colorName} hexValue={hexColor} />
      <ToggleBar initialValue={sliderValue} onChange={setSliderValue} />
    </div>
  );
}
