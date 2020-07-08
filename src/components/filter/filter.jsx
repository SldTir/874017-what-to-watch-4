import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {filmGenre, activeClass} = props;
  return (
    <li className={activeClass}>
      <a href="#" className="catalog__genres-link">{filmGenre}</a>
    </li>
  );
};

export default Filter;
