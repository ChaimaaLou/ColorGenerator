import ColorSetter from "./ColorSetter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function ColorSelector({ color }: { color: string }) {
  const [testingColor, setTestingColor] = useState(color);
  const substring1: string = testingColor.substring(1, 3);
  const substring2: string = testingColor.substring(3, 5);
  const substring3: string = testingColor.substring(5, 7);
  return (
    <>
      <Container className="colorContainer">
        <Row xs={1} md={2}>
          <Col>
            <ColorSetter colorName="Red" colorHex={substring1} />
            <ColorSetter colorName="Blue" colorHex={substring2} />
            <ColorSetter colorName="Green" colorHex={substring3} />
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default ColorSelector;
