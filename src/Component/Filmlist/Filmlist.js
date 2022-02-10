
import React from "react";
import { moviesData } from '../../Constants/Data';
import Film from "../Film/Film";


const Filmlist = () => {
    const handleName = (name, type) => {
    alert(`this ${name} has a type ${type}`);
  };
    return (
    <div >
        
        { moviesData.map ( (film)=> ( 
            <Film film={film} key={film.id} handleName={handleName} />
      ))}
                
                
            
            
   </div>);
};
export default Filmlist 