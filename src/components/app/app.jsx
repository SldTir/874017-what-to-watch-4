import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {Description, Titles} = props;
  return (
    <Main
      Description={Description}
      Titles={Titles}
    />
  );
};

App.propTypes = {
  Description: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    DATE: PropTypes.number.isRequired,
  }),
  Titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
