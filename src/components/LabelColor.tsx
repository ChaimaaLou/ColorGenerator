interface LabelColorProps {
  color: string;
  hexValue: string;
}

// Round element component
const LabelColor: React.FC<LabelColorProps> = ({ color, hexValue }) => {
  return (
    <label
      style={{
        width: "53px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: hexValue,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        color: "white",
        textAlign: "center",
        marginRight: "5px",
      }}
    >
      {color}
    </label>
  );
};

export default LabelColor;
