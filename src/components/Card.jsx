import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../redux/actions";



function Card( { id, name, status, species, gender, origin, image, onClose, 
   addFavorite, removeFavorite, favorite } ) {
   
   const [fav, setFav] = useState(false)

   useEffect(() => {
      favorite.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [favorite, id]);
    
   function handleFavorite(character) {

      if(!fav){
         addFavorite(character)
         setFav(true)
      } else {
         removeFavorite(character)
         setFav(false)
      }
   }
   
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         {
   fav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         
         <Link to={`/detail/${id}`} >
         <h2>{name}</h2>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}


 
const mapSpatchToProps = (dispatch) => {
   
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

const mapStateToProps = (state) => {
   return {
      favorite: state.myFavorite
   }   
}

export default connect(mapStateToProps, mapSpatchToProps)(Card)
