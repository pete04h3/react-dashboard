import React from "react";
import Circle from "react-circle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Circle
        animate={true} // Boolean: Animated/Static progress
        responsive={true} // Boolean: Make SVG adapt to parent size
        size={150} // Number: Defines the size of the circle.
        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
        progress={69} // Number: Update to change the progress and percentage.
        progressColor="cornflowerblue" // String: Color of "progress" portion of circle.
        bgColor="whitesmoke" // String: Color of "empty" portion of circle.
        textColor="hotpink" // String: Color of percentage text color.
        textStyle={{
          font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
        }}
        percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
        roundedStroke={true} // Boolean: Rounded/Flat line ends
        showPercentage={true} // Boolean: Show/hide percentage.
        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
      />
    </div>
  );
}

export default App;
