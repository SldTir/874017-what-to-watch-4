import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const Titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      Description={Description}
      Titles={Titles}
    />,
    document.querySelector(`#root`)
);
