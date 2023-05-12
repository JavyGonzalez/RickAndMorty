import React from 'react'
import style from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';


const Favorites = (props) => {
    const {myFavorites, onClose} = props;
    const dispach = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e)=>{
      dispach(orderCards(e.target.value));
      setAux(!aux);
    }
    
    const handleFilter = (e)=>{
      dispach(filterCards(e.target.value));
    }

  return (
    <div className={style.favoritos}>
    <div className={style.selectContainer}>
      <select onChange={handleOrder}>
        <option>Seleccinar...</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option>Seleccionar...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
    <div className={style.cardContainer}>
      {myFavorites &&
        myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char?.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin?.name}
            image={char.image}
            character={char}
            onClose={onClose}
          />
        ))}
    </div>
  </div>
  )

  
}

const mapStateToProps = (state) =>{
    return{
       myFavorites: state.myFavorites,
    }
 }

export default connect(mapStateToProps, null)(Favorites);
