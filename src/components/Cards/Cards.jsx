//React
import React from 'react';
//Components
import Card from '../Card/Card';
//Style
import style from './Cards.module.css';

export default function Cards(props) {

   const {characters, onClose} = props;

   const cardComponents = characters.map((character) => {
     return (
      <Card 
      key={character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin.name}
      image={character.image}
      character={character}
      onClose={onClose}

    />
     ) 
   });
   return <div className={style.div}>{cardComponents}</div>;
}
