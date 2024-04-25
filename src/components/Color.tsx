import "../assets/style.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import useUpdateColor from "../hooks/useUpdateColor";

const Color = ({
  color,
  onRemove,
}: {
  color: string;
  onRemove: () => void;
}) => {
  const { color2, newColor } = useUpdateColor(color);

  return (
    <div className="color" style={{ backgroundColor: color2, height: "100%" }}>
      <div className="wrap">
        <div style={{ display: "flex", margin: "2px" }}>
          <button className="icon" onClick={onRemove}>
            <MdDeleteOutline />
          </button>
          <button className="icon" onClick={newColor}>
            <IoMdRefresh />
          </button>
        </div>
        <br />
        <button className="icon"> {color2} </button>
      </div>
    </div>
  );
};

export default Color;
