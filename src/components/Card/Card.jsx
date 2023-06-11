//Style
import style from './Card.module.css';
//React Router Dom
import { Link } from 'react-router-dom';
//Actions
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
//React-redux
import {connect} from 'react-redux';

function Card(props) {

   const {name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites} = props;
   const [isFav, setIsFav] = useState(false);
 
   const handleFavorite = () => {
      /*if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav(props);
      }*/
      //Operador ternario!!!
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
    };
  
    useEffect(() => {
      if (Array.isArray(myFavorites)) {
        myFavorites.forEach((fav) => {
          if (fav.id === props.id) {
            setIsFav(true);
          }
        });
      }
    }, [myFavorites]);

   return (
      <div className={style.div}>
         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
         <button className={style.btnDelete}
          onClick={()=>{
            onClose(id);}}>
            X
         </button>

         <div className={style.content}>

            <div className={style.name}>
               <Link to={`/detail/${id}`}>
                  <h2 className={style.h2} >{name}</h2>
               </Link>
            </div>

            <img className={style.img} src={image} alt='' />  
            <h2 className={style.h2}>{status}</h2>
            <h2 className={style.h2}>{species}</h2>
            <h2 className={style.h2}>{gender}</h2>
            <h2 className={style.originName}>{origin}</h2>
      
         </div>
        
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character) => {
         dispatch(addFav(character)); 
      },
      removeFav: (id)=>{
         dispatch(removeFav(id));
      },
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);