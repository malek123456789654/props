import React from 'react';
import "./Film.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const Film = ({film}) => {
  return (<div id="container">

    <div className="film-details">
    <h1>{film.name}</h1>
     

             <Rating
          name="text-feedback"
          value={film.rating.rate}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        </div>
        <div className="film-image">
             <img src = {film.image} alt = {film.name} width = "200"  />
             </div>
        <p className="information">{film.description}</p>
  </div>
 
    );
};

export default Film;
