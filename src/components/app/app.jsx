import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const headerClick = () => {};

const App = (props) => {
  const {Description, filmsInfo} = props;
  return (
    <Main
      Description={Description}
      filmsInfo={filmsInfo}
      onHeaderClick={headerClick}
    />
  );
};

App.propTypes = {
  Description: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    DATE: PropTypes.number.isRequired,
  }),
  filmsInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default App;
