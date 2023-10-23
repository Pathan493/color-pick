import './App.css';
import React, { useState } from "react";


function App() {
  const [color, setColor] = useState("red");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      <div className="color-picker">
        <h1>Pick a color</h1>
        <div className="color-list">      
          <div
            className="color-item red"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChange("red")}
          />
          <div
            className="color-item green"
            style={{ backgroundColor: "green" }}
            onClick={() => handleColorChange("green")}
          />
          <div
            className="color-item blue"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChange("blue")}
          />
          <div
            className="color-item violet"
            style={{ backgroundColor: "violet" }}
            onClick={() => handleColorChange("violet")}
          />
          <div
            className="color-item yellow"
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleColorChange("yellow")}
          />
          <div
            className="color-item drakgreeen"
            style={{ backgroundColor: "darkgreen" }}
            onClick={() => handleColorChange("darkgreen")}
          />
          <div
            className="color-item orangered"
            style={{ backgroundColor: "orangered" }}
            onClick={() => handleColorChange("orangered")}
          />
          <div className="color-preview" style={{ backgroundColor: color }}>
        Selected color: {color}
      </div>  
        </div>
      </div>
      
    </div>
  );
}

export default App;
