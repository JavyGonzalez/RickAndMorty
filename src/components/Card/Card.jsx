//Style
import style from './Card.module.css';
//React Router Dom
import { Link } from 'react-router-dom';
//Actions
import { add_fav, remove_fav } from '../../redux/actions';
import { useEffect, useState } from 'react';
//React-redux
import {connect} from 'react-redux';

function Card(props) {

   const {name, status, species, gender, origin, image, onClose, id, add_fav, remove_fav, myFavorites} = props;
   const [isFav, setIsFav] = useState(false);
 
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         remove_fav(id);
      }else{
         setIsFav(true);
         add_fav(props);
      }
    };
  
    useEffect(() => {
      if (Array.isArray(myFavorites)) {
        myFavorites.forEach((fav) => {
          if (fav.id === id) {
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
      add_fav: (character)=>{
         dispatch(add_fav(character));
      },
      remove_fav: (id)=>{
         dispatch(remove_fav(id));
      },
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);