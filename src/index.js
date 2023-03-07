import React from "react";
import ReactDOM from "react-dom";

import App from "./App"; //importings/app.js

//ReactDOM.render(<App />, document.getElementById("root"));
//this gonna trigger the div with id root and inject the react inside.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App firstSearchString="All" />
  </React.StrictMode>
);
