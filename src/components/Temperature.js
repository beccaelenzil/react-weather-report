import React, { useState } from "react";
import "./Temperature.css";

const Temperature = () => {
  let [temp, setTemp] = useState(70);
  let [color, setColor] = useState("red");

  const formatTemp = () => {
    if (temp > 60) {
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  const increase = () => {
    temp += 1;
    setTemp(temp);
    formatTemp();
  };

  const decrease = () => {
    temp -= 1;
    setTemp(temp);
    formatTemp();
  };

  return (
    <section id="temperature">
      <button onClick={increase}>Increase</button>
      <p className={color}>{temp}</p>
      <button onClick={decrease}>Decrease</button>
    </section>
  );
};

export default Temperature;
