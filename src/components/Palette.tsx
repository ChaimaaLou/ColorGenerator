import Color from "./Color";
import "../assets/style.css";
import useCrDelColor from "../hooks/useCrDelColor";

const Palette = () => {
  const { colors, addColor, removeColor } = useCrDelColor();

  return (
    <div className="palette">
      <ul style={{ display: "flex", height: "100%" }}>
        {colors.map((color, index) => (
          <li key={color} style={{ flexGrow: 1, height: "100%" }}>
            <Color
              key={index}
              color={color}
              onRemove={() => removeColor(index)}
            />
          </li>
        ))}
      </ul>
      <button onClick={addColor}>Add Color</button>
    </div>
  );
};

export default Palette;
