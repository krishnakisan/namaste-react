import React from "react";
import  ReactDOM  from "react-dom/client";

//Create Element Using React
const header = React.createElement("h1",{className : "heading1"},"Hello World Using React !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

// Create Element Using JSX
const jsxHeader = <h1 className="heading2">Hello World Using JSX</h1>;
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(jsxHeader);




