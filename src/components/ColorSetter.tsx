import LabelColor from "./LabelColor";
import ToggleBar from "./ToggleBar";
import "../assets/style.css";
import { hexColor } from "../assets/hexColor";

export default function ColorSetter({
  colorName,
  colorHex,
  onChange,
}: {
  colorName: string;
  colorHex: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <div className="sliderContainer">
      <LabelColor color={colorName} hexValue={hexColor(colorName, colorHex)} />
      <ToggleBar initialValue={colorHex} onChange={onChange} />
    </div>
  );
}
