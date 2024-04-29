import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { hexToDecimal } from "../assets/hexToDecimal";
import { decimalToHex } from "../assets/decimalToHex";

interface ToggleBarProps {
  initialValue: string;
  onChange: (newValue: string) => void;
}

const ToggleBar: React.FC<ToggleBarProps> = ({ initialValue, onChange }) => {
  const [sliderValue, setSliderValue] = useState(initialValue);
  const decimalNumber: number = hexToDecimal(sliderValue);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newHexValue = decimalToHex(newValue as number);
    setSliderValue(newHexValue);
    onChange(newHexValue);
  };

  return (
    <Slider
      value={decimalNumber}
      min={0}
      max={255}
      aria-label="Default"
      valueLabelDisplay="auto"
      onChange={handleChange}
    />
  );
};

export default ToggleBar;
