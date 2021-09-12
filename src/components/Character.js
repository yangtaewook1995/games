import React from "react";
import PropTypes from "prop-types";
// import "./Movie.css";
import { Link } from "react-router-dom";

function Character({ id, name, img }) {
  return (
    <div className="characters__character">
      <Link to={{ pathname: `character/${name}`, state: { id, name, img } }}>
        <img src={img} alt={name} title={name}></img>
        <div className="character__link-name">
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
}

export default Character;
