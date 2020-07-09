import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {filmGenre, activeClass, onFilterButtonClick} = props;
  return (
    <li className={activeClass}
      onClick={onFilterButtonClick(filmGenre)}
    >
      <a href="#" className="catalog__genres-link">{filmGenre}</a>
    </li>
  );
};

export default Filter;
