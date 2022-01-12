import { useState } from "react";
import "./App.css";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const btnColor = "#f2a33c";

  const addText = (val) => {
    setText((prev) => {
      return [...prev, val + ""];
    });
  };

  const clearText = () => {
    setText("");
    setResult("");
  };

  const calMath = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addText} />
          <Button symbol="8" handleClick={addText} />
          <Button symbol="9" handleClick={addText} />
          <Button symbol="/" color={btnColor} handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addText} />
          <Button symbol="5" handleClick={addText} />
          <Button symbol="6" handleClick={addText} />
          <Button symbol="*" color={btnColor} handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addText} />
          <Button symbol="2" handleClick={addText} />
          <Button symbol="3" handleClick={addText} />
          <Button symbol="+" color={btnColor} handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addText} />
          <Button symbol="." handleClick={addText} />
          <Button symbol="=" handleClick={calMath} />
          <Button symbol="-" color={btnColor} handleClick={addText} />
        </div>
        <Button symbol="Clear"  color="black" handleClick={clearText} />
      </div>
    </div>
  );
};

export default App;
