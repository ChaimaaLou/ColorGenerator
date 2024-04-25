import useColorSlider from "../hooks/useColorSlider";
import LabelColor from "./LabelColor";
import ToggleBar from "./ToggleBar";
import { useState } from "react";
import "../assets/style.css";

//parent component
export default function ColorSetter({
  colorName,
  colorHex,
}: {
  colorName: string;
  colorHex: string;
}) {
  const [sliderValue, setSliderValue] = useState(colorHex);
  const { hexColor } = useColorSlider(colorName, sliderValue);

  return (
    <div className="sliderContainer">
      <LabelColor color={colorName} hexValue={hexColor} />
      <ToggleBar initialValue={sliderValue} onChange={setSliderValue} />
    </div>
  );
}
