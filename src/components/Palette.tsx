import Color from "./Color";
import "../assets/style.css";
import useCrDelColor from "../hooks/useCrDelColor";

const Palette = () => {
  const { colors, addRandomColor, removeColor, updateColor } = useCrDelColor();

  return (
    <div className="palette">
      <ul style={{ display: "flex", height: "100%" }}>
        {colors.map((color, index) => (
          <li key={color} style={{ flexGrow: 1, height: "100%" }}>
            <Color
              key={index}
              color={color}
              onRemove={() => removeColor(index)}
              onUpdate={(color) => updateColor(index, color)}
            />
          </li>
        ))}
      </ul>
      <button onClick={addRandomColor}>Add Color</button>
    </div>
  );
};

export default Palette;
