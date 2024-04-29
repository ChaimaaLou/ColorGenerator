import "../assets/style.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import useUpdateColor from "../hooks/useUpdateColor";
import ColorSelector from "./ColorSelector";
import { useState } from "react";

const Color = ({
  color,
  onRemove,
}: {
  color: string;
  onRemove: () => void;
}) => {
  const { color2, newRandomColor, newColor } = useUpdateColor(color);
  const [showColorSelector, setShowColorSelector] = useState(false);

  const handleButtonClick = () => {
    setShowColorSelector(!showColorSelector);
  };

  const onChange = (color: string) => {
    newColor(color);
    setShowColorSelector(!showColorSelector);
  };

  return (
    <div className="color" style={{ backgroundColor: color2, height: "100%" }}>
      <div className="wrap">
        <div style={{ display: "flex", margin: "2px" }}>
          <button className="icon" onClick={onRemove}>
            <MdDeleteOutline />
          </button>
          <button className="icon" onClick={newRandomColor}>
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
