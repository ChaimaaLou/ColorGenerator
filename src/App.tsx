import "./App.css";
import ColorSelector from "./components/ColorSelector";
//import Palette from "./components/Palette";

function App() {
  const testColor: string = "#ffbffc";
  return (
    <div className="App">
      {/* <Palette /> 
      <Palette /> */}
      <ColorSelector color={testColor} />
    </div>
  );
}

export default App;
