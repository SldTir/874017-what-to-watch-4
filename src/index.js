import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import filmsInfo from "./mocks/films.js";
import {reducer} from "./reducer.js";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        Description={Description}
        filmsInfo={filmsInfo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
