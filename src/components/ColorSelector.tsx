import ColorSetter from "./ColorSetter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

//parent component
function ColorSelector({ color }: { color: string }) {
  const [testingColor, setTestingColor] = useState(color);
  const [substring1, setSubstring1] = useState(testingColor.substring(1, 3));
  const [substring2, setSubstring2] = useState(testingColor.substring(3, 5));
  const [substring3, setSubstring3] = useState(testingColor.substring(5, 7));

  useEffect(() => {
    setTestingColor(`#${substring1}${substring2}${substring3}`);
  }, [substring1, substring2, substring3]);

  return (
    <Container className="colorContainer">
      <Row xs={1} md={2}>
        <Col>
          <ColorSetter
            colorName="Red"
            colorHex={substring1}
            onChange={setSubstring1}
          />
          <ColorSetter
            colorName="Blue"
            colorHex={substring2}
            onChange={setSubstring2}
          />
          <ColorSetter
            colorName="Green"
            colorHex={substring3}
            onChange={setSubstring3}
          />
        </Col>
        <Col>
          <button
            style={{
              width: "100%",
              height: "45px",
              backgroundColor: testingColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              color: "black",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            {testingColor}
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default ColorSelector;
