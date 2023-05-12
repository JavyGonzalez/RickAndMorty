import style from './SearchBar.module.css';
import React, {useState} from 'react';

export default function SearchBar(props) {
   const {onSearch, onSearchRandom} = props;
   const [id, setId] = useState('');

   function handleChange(event) {
      setId(event.target.value);
    }

   function handleSearch(event){
      id > 827
      ? window.alert('El id no existe!')
      : onSearch(id)
       setId('')
   }

   return (
      <div className={style.contenedor}>
         <div className={style.barra}>
            <button className={style.random} onClick={()=> onSearchRandom()}>Personaje Random</button>
            <input className={style.input} type='search' value={id} placeholder='Buscar' onChange={handleChange}/>
            <button className={style.btn} onClick={handleSearch}>
               <span className={style.icono}>
               <i class="fas fa-plus"></i>
               </span>
            </button>
         </div>;
      </div>);
}
