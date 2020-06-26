import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import filmsInfo from "./mocks/films.js";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

ReactDOM.render(
    <App
      Description={Description}
      filmsInfo={filmsInfo}
    />,
    document.querySelector(`#root`)
);
