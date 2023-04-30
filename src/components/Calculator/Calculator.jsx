import "./calculator.scss";
import { useState } from "react";

function Calculator() {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("");
  const actions = ["/", "*", "+", "-", "."];
  const updateCalculation = (value) => {
    console.log(value);
    if (
      actions.includes(value) & (calculation === "") ||
      actions.includes(value) & actions.includes(calculation.slice(-1))
    ) {
      return;
    }
    setCalculation(calculation + value);

    if (!actions.includes(value)) {
      setOutput(eval(calculation + value).toString());
    }
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculation(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };
  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  return (
    <div style={{margin: "0 0 100px 0"}}>
      <center>
        {" "}
        <h1> Calculator</h1>
      </center>

      <div className="calc-grid">
        <div className="output" style={{padding:"10px 0px"}}>
          {calculation || "0"}
          {output ? <span style={{padding: "10px 0px"}}>{output}</span> : ""}
        </div>

        <div>
          <div className="ops">
            <button
              onClick={() => {
                updateCalculation("/");
              }}
            >
              /
            </button>
            <button
              onClick={() => {
                updateCalculation("*");
              }}
            >
              *
            </button>
            <button
              onClick={() => {
                updateCalculation("+");
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                updateCalculation("-");
              }}
            >
              -
            </button>
            <button onClick={clear}>
              {" "}
              <img
                width={40}
                height={40}
                src="https://cdn-icons-png.flaticon.com/512/159/159805.png"
              />
            </button>
          </div>
          <div className="dig">
            {createDigits()}

            <button
              onClick={() => {
                updateCalculation(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                updateCalculation("0");
              }}
            >
              0
            </button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
