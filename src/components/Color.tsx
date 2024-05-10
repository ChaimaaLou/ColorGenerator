import "../assets/style.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import useUpdateColor from "../hooks/useUpdateColor";
import ColorSelector from "./ColorSelector";
import { useState } from "react";

const Color = ({
  color,
  onRemove,
  onUpdate,
}: {
  color: string;
  onRemove: () => void;
  onUpdate: (color: string) => void;
}) => {
  const { color2, newRandomColor, newColor } = useUpdateColor(color);
  const [showColorSelector, setShowColorSelector] = useState(false);

  const handleButtonClick = () => {
    setShowColorSelector(!showColorSelector);
  };

  const onChange = (color: string) => {
    newColor(color);
    setShowColorSelector(!showColorSelector);
    onUpdate(color);
  };

  const handleClick = () => {
    const color: string = newRandomColor();
    onUpdate(color);
  };

  return (
    <div className="color" style={{ backgroundColor: color2, height: "100%" }}>
      <div className="wrap">
        <div style={{ display: "flex", margin: "2px" }}>
          <button className="icon" onClick={onRemove}>
            <MdDeleteOutline />
          </button>
          <button className="icon" onClick={handleClick}>
            <IoMdRefresh />
          </button>
        </div>
        <br />
        <div style={{ position: "relative", display: "inline-block" }}>
          <button className="icon" onClick={handleButtonClick}>
            {color2}
          </button>
          {showColorSelector && (
            <div style={{ position: "absolute", bottom: "20%", left: "0" }}>
              <ColorSelector color={color2} onChangeColor={onChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Color;
