import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#ffffff");
  const [showColor, setShowColor] = useState(false);

  const generateRandomColor = () => {
    let newColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    if (newColor.length < 7) {
      generateRandomColor();
    } else {
      setColor(newColor);
      setShowColor(true);
    }
  };

  const colorBodyStyle = {
    backgroundColor: color,
    transition: "background-color 0.5s ease",
  };

  return (
    <div className="center">
      <button className="button-primary" onClick={generateRandomColor}>
        Generate Color 😈
      </button>
      {showColor && (
        <span className="color-body" style={colorBodyStyle}>
          Hexcode: {color}
        </span>
      )}
    </div>
  );
};

export default RandomColor;
