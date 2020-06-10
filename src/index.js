import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Description = {
  GENRE: `Drama`,
  DATE: `2014`,
};

ReactDOM.render(
    <App Description={Description}/>,
    document.querySelector(`#root`)
);
