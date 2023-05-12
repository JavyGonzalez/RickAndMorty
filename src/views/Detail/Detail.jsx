//React
import React, { useState, useEffect } from "react";
//Axios
import axios from "axios";
//React Router Dom
import { useParams } from "react-router-dom";
//Style

import style from './Detail.module.css';

const Detail = ()=> {

    const {id} = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        
       <div className={style.contenedor}>
            <div className={style.contIzq}>
                <h1 className={style.name}>{character?.name}</h1>
                <h2>{character?.status}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
            </div>
            <div className={style.contDer}>
                <img src={character?.image} alt="" />
            </div>
        </div>
        
    );
};

export default Detail;

