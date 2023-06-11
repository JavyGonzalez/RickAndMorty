//React
import React from "react";
//Components
import SearchBar from "../SearchBar/SearchBar";
//React-router-dom
import { Link} from "react-router-dom";
//Style
import style from './Nav.module.css';
import PathRoutes from '../../helpers/Routes.helper.js'
import logoRaM from '../Fondos/LogoRickAnMorty.png'

export default function Nav (props) {

    const { onSearch, onSearchRandom } = props;
    
    return (

        <div className={style.contenedor}>
            <Link className={style.about} to={PathRoutes.ABOUT} >Acerca de...</Link>
            <Link className={style.home} to={PathRoutes.HOME}>Inicio</Link>
            <Link className={style.home} to={PathRoutes.FAVORITES}>Favoritos</Link>
            <img className={style.logo} src={logoRaM} alt=""/>
            <SearchBar onSearch = {onSearch} onSearchRandom={onSearchRandom} />
        </div>
        
    )
    
}

