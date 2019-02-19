import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Hello from "./component.jsx";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/home" component={Hello} />
    </BrowserRouter>,
    document.getElementById("app")
  );
}

main();
